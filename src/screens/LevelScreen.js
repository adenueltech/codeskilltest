import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../styles/theme';
import { useApp } from '../context/AppContext';

const LevelScreen = ({ route, navigation }) => {
  const { technology, technologyKey, level, levelData } = route.params;
  const { getBestScore, isLevelCompleted, getAttempts } = useApp();

  const bestScore = getBestScore(technologyKey, level);
  const isCompleted = isLevelCompleted(technologyKey, level);
  const attempts = getAttempts(technologyKey, level);

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

  const getDifficultyIcon = (levelKey) => {
    switch (levelKey) {
      case 'beginner':
        return '🌱';
      case 'intermediate':
        return '🔥';
      case 'advanced':
        return '⚡';
      default:
        return '📚';
    }
  };

  const startQuiz = () => {
    if (isCompleted) {
      Alert.alert(
        'Retake Quiz',
        `You've already completed this quiz with a score of ${bestScore}/${levelData.questions.length}. Do you want to retake it?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Retake',
            onPress: () => navigateToQuiz(),
          },
        ]
      );
    } else {
      navigateToQuiz();
    }
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', {
      technology,
      technologyKey,
      level,
      levelData,
      questions: levelData.questions,
    });
  };

  const difficultyColor = getDifficultyColor(level);
  const difficultyIcon = getDifficultyIcon(level);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[difficultyColor, difficultyColor + 'CC']}
        style={styles.header}
      >
        <Text style={styles.technologyIcon}>{technology.icon}</Text>
        <Text style={styles.levelIcon}>{difficultyIcon}</Text>
        <Text style={styles.levelName}>{levelData.name}</Text>
        <Text style={styles.technologyName}>{technology.name}</Text>
        <Text style={styles.headerSubtitle}>
          Ready to test your {technology.name.toLowerCase()} skills?
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        {isCompleted && (
          <View style={styles.completedSection}>
            <Text style={styles.completedTitle}>🎉 Quiz Completed!</Text>
            <Text style={styles.completedText}>
              You can retake this quiz to improve your score
            </Text>
          </View>
        )}

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Your Progress</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statIcon}>🎯</Text>
              <Text style={styles.statValue}>
                {bestScore}/{levelData.questions.length}
              </Text>
              <Text style={styles.statLabel}>Best Score</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statIcon}>📊</Text>
              <Text style={styles.statValue}>
                {bestScore > 0 
                  ? `${Math.round((bestScore / levelData.questions.length) * 100)}%`
                  : '0%'
                }
              </Text>
              <Text style={styles.statLabel}>Accuracy</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statIcon}>🔄</Text>
              <Text style={styles.statValue}>{attempts}</Text>
              <Text style={styles.statLabel}>Attempts</Text>
            </View>
          </View>
        </View>

        <View style={styles.quizInfoSection}>
          <Text style={styles.sectionTitle}>Quiz Details</Text>
          
          <View style={styles.infoCard}>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>📝</Text>
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Questions</Text>
                <Text style={styles.infoDescription}>
                  {levelData.questions.length} carefully selected questions
                </Text>
              </View>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>⏱️</Text>
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Time Limit</Text>
                <Text style={styles.infoDescription}>
                  No time limit - take your time to think
                </Text>
              </View>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>🏆</Text>
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Scoring</Text>
                <Text style={styles.infoDescription}>
                  1 point per correct answer
                </Text>
              </View>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>🎖️</Text>
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Badges</Text>
                <Text style={styles.infoDescription}>
                  Earn badges based on your performance
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.rulesSection}>
          <Text style={styles.sectionTitle}>Quiz Rules</Text>
          <View style={styles.rulesList}>
            <Text style={styles.ruleItem}>• Choose the best answer for each question</Text>
            <Text style={styles.ruleItem}>• You can't go back to previous questions</Text>
            <Text style={styles.ruleItem}>• Each question has only one correct answer</Text>
            <Text style={styles.ruleItem}>• Review explanations after each question</Text>
            <Text style={styles.ruleItem}>• Retake the quiz anytime to improve</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.startButton, { backgroundColor: difficultyColor }]}
          onPress={startQuiz}
          activeOpacity={0.8}
        >
          <Text style={styles.startButtonText}>
            {isCompleted ? '🔄 Retake Quiz' : '🚀 Start Quiz'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xxl,
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
    borderBottomLeftRadius: theme.borderRadius.xl,
    borderBottomRightRadius: theme.borderRadius.xl,
  },
  technologyIcon: {
    fontSize: 40,
    marginBottom: theme.spacing.sm,
  },
  levelIcon: {
    fontSize: 50,
    marginBottom: theme.spacing.sm,
  },
  levelName: {
    fontSize: theme.fontSizes.xxxl,
    fontWeight: 'bold',
    color: theme.colors.white,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginBottom: theme.spacing.xs,
  },
  technologyName: {
    fontSize: theme.fontSizes.lg,
    color: theme.colors.white,
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: theme.spacing.sm,
  },
  headerSubtitle: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.white,
    textAlign: 'center',
    opacity: 0.9,
  },
  content: {
    padding: theme.spacing.lg,
  },
  completedSection: {
    backgroundColor: theme.colors.success + '15',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.success + '30',
  },
  completedTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.success,
    marginBottom: theme.spacing.sm,
  },
  completedText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  statsSection: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginHorizontal: theme.spacing.xs,
    ...theme.shadows.sm,
  },
  statIcon: {
    fontSize: theme.fontSizes.xl,
    marginBottom: theme.spacing.sm,
  },
  statValue: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  quizInfoSection: {
    marginBottom: theme.spacing.xl,
  },
  infoCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  infoIcon: {
    fontSize: theme.fontSizes.lg,
    marginRight: theme.spacing.md,
    width: 30,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  infoDescription: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  rulesSection: {
    marginBottom: theme.spacing.xl,
  },
  rulesList: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  ruleItem: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
    lineHeight: 20,
  },
  startButton: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    ...theme.shadows.md,
  },
  startButtonText: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});

export default LevelScreen;