import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../styles/theme';
import { useApp } from '../context/AppContext';
import { getBadgeForScore } from '../data/quizData';

const QuizScreen = ({ route, navigation }) => {
  const { technology, technologyKey, level, levelData, questions } = route.params;
  const { updateProgress, addBadge } = useApp();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const getDifficultyColor = (levelKey) => {
    switch (levelKey) {
      case 'beginner':
        return '#28a745';
      case 'intermediate':
        return '#ffc107';
      case 'advanced':
        return '#dc3545';
      default:
        return theme.colors.primary;
    }
  };

  const difficultyColor = getDifficultyColor(level);

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answerIndex);
    
    // Check if answer is correct
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    
    // Show explanation after a brief delay
    setTimeout(() => {
      setShowExplanation(true);
    }, 500);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      completeQuiz();
    } else {
      // Animate transition
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
        
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const completeQuiz = () => {
    const finalScore = selectedAnswer === currentQuestion.correctAnswer ? score + 1 : score;
    
    // Update progress
    updateProgress(technologyKey, level, finalScore, questions.length);
    
    // Get and add badge
    const badge = getBadgeForScore(finalScore, questions.length);
    addBadge({
      ...badge,
      technology: technologyKey,
      level: level,
      score: finalScore,
      totalQuestions: questions.length,
      earnedAt: new Date().toISOString(),
    });
    
    // Navigate to results
    navigation.replace('Result', {
      technology,
      technologyKey,
      level,
      score: finalScore,
      totalQuestions: questions.length,
      badge,
    });
  };

  const handleQuitQuiz = () => {
    Alert.alert(
      'Quit Quiz',
      'Are you sure you want to quit? Your progress will be lost.',
      [
        {
          text: 'Continue Quiz',
          style: 'cancel',
        },
        {
          text: 'Quit',
          style: 'destructive',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  const getOptionStyle = (optionIndex) => {
    if (selectedAnswer === null) {
      return styles.option;
    }
    
    if (optionIndex === currentQuestion.correctAnswer) {
      return [styles.option, styles.correctOption];
    }
    
    if (optionIndex === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
      return [styles.option, styles.incorrectOption];
    }
    
    return [styles.option, styles.disabledOption];
  };

  const getOptionTextStyle = (optionIndex) => {
    if (selectedAnswer === null) {
      return styles.optionText;
    }
    
    if (optionIndex === currentQuestion.correctAnswer) {
      return [styles.optionText, styles.correctOptionText];
    }
    
    if (optionIndex === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
      return [styles.optionText, styles.incorrectOptionText];
    }
    
    return [styles.optionText, styles.disabledOptionText];
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[difficultyColor, difficultyColor + 'CC']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.quitButton}
            onPress={handleQuitQuiz}
          >
            <Text style={styles.quitButtonText}>✕</Text>
          </TouchableOpacity>
          
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>
              {currentQuestionIndex + 1} of {questions.length}
            </Text>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill, 
                  { width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }
                ]} 
              />
            </View>
          </View>
          
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Score: {score}</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View style={[styles.questionContainer, { opacity: fadeAnim }]}>
          <Text style={styles.questionNumber}>
            Question {currentQuestionIndex + 1}
          </Text>
          
          <Text style={styles.questionText}>
            {currentQuestion.question}
          </Text>
          
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={getOptionStyle(index)}
                onPress={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                activeOpacity={0.8}
              >
                <View style={styles.optionContent}>
                  <View style={styles.optionNumber}>
                    <Text style={styles.optionNumberText}>
                      {String.fromCharCode(65 + index)}
                    </Text>
                  </View>
                  <Text style={getOptionTextStyle(index)}>
                    {option}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          
          {showExplanation && (
            <View style={styles.explanationContainer}>
              <Text style={styles.explanationTitle}>
                {selectedAnswer === currentQuestion.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}
              </Text>
              <Text style={styles.explanationText}>
                {currentQuestion.explanation}
              </Text>
              
              <TouchableOpacity
                style={[styles.nextButton, { backgroundColor: difficultyColor }]}
                onPress={handleNextQuestion}
                activeOpacity={0.8}
              >
                <Text style={styles.nextButtonText}>
                  {isLastQuestion ? '🏁 Finish Quiz' : '➡️ Next Question'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quitButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quitButtonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
  progressContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: theme.spacing.lg,
  },
  progressText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: theme.borderRadius.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.sm,
  },
  scoreContainer: {
    alignItems: 'flex-end',
  },
  scoreText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  questionContainer: {
    flex: 1,
  },
  questionNumber: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    fontWeight: '600',
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  questionText: {
    fontSize: theme.fontSizes.xl,
    color: theme.colors.text,
    fontWeight: '600',
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  optionsContainer: {
    marginBottom: theme.spacing.xl,
  },
  option: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 2,
    borderColor: theme.colors.border,
    ...theme.shadows.sm,
  },
  correctOption: {
    backgroundColor: theme.colors.success + '15',
    borderColor: theme.colors.success,
  },
  incorrectOption: {
    backgroundColor: theme.colors.danger + '15',
    borderColor: theme.colors.danger,
  },
  disabledOption: {
    opacity: 0.6,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  optionNumberText: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  optionText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    flex: 1,
    lineHeight: 22,
  },
  correctOptionText: {
    color: theme.colors.success,
    fontWeight: '600',
  },
  incorrectOptionText: {
    color: theme.colors.danger,
    fontWeight: '600',
  },
  disabledOptionText: {
    color: theme.colors.textSecondary,
  },
  explanationContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.md,
  },
  explanationTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  explanationText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    lineHeight: 22,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  nextButton: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  nextButtonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.md,
    fontWeight: 'bold',
  },
});

export default QuizScreen;