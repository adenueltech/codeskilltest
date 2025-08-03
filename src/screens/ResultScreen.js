import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../styles/theme';

const { width } = Dimensions.get('window');

const ResultScreen = ({ route, navigation }) => {
  const { technology, technologyKey, level, score, totalQuestions, badge } = route.params;

  const percentage = Math.round((score / totalQuestions) * 100);
  
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

  const getPerformanceMessage = () => {
    if (percentage >= 90) {
      return {
        title: '🎉 Outstanding!',
        message: 'You\'ve mastered this level! Your knowledge is exceptional.',
        color: '#FFD700',
      };
    } else if (percentage >= 80) {
      return {
        title: '🌟 Excellent!',
        message: 'Great job! You have a solid understanding of the concepts.',
        color: '#C0C0C0',
      };
    } else if (percentage >= 70) {
      return {
        title: '👍 Good Work!',
        message: 'Well done! You\'re on the right track, keep practicing.',
        color: '#CD7F32',
      };
    } else if (percentage >= 60) {
      return {
        title: '📚 Keep Learning!',
        message: 'You\'re making progress! Review the concepts and try again.',
        color: '#8B4513',
      };
    } else {
      return {
        title: '💪 Don\'t Give Up!',
        message: 'Learning takes time. Study more and come back stronger!',
        color: '#808080',
      };
    }
  };

  const performanceData = getPerformanceMessage();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const retakeQuiz = () => {
    navigation.navigate('Quiz', {
      technology,
      technologyKey,
      level,
      levelData: { questions: route.params.questions || [] },
      questions: route.params.questions || [],
    });
  };

  const viewBadges = () => {
    navigation.navigate('Badges');
  };

  const tryNextLevel = () => {
    const levels = ['beginner', 'intermediate', 'advanced'];
    const currentIndex = levels.indexOf(level);
    
    if (currentIndex < levels.length - 1) {
      const nextLevel = levels[currentIndex + 1];
      navigation.navigate('Level', {
        technology,
        technologyKey,
        level: nextLevel,
        levelData: technology.levels[nextLevel],
      });
    } else {
      // If advanced level completed, suggest other technologies
      navigation.navigate('Home');
    }
  };

  const canTryNextLevel = () => {
    const levels = ['beginner', 'intermediate', 'advanced'];
    const currentIndex = levels.indexOf(level);
    return currentIndex < levels.length - 1 && percentage >= 70;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[performanceData.color, performanceData.color + 'CC']}
        style={styles.header}
      >
        <Text style={styles.resultIcon}>{badge.icon}</Text>
        <Text style={styles.resultTitle}>{performanceData.title}</Text>
        <Text style={styles.resultMessage}>{performanceData.message}</Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.scoreSection}>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreText}>{score}</Text>
            <Text style={styles.scoreDivider}>/</Text>
            <Text style={styles.totalText}>{totalQuestions}</Text>
          </View>
          <Text style={styles.percentageText}>{percentage}%</Text>
          <Text style={styles.scoreLabel}>Your Score</Text>
        </View>

        <View style={styles.badgeSection}>
          <Text style={styles.sectionTitle}>Badge Earned</Text>
          <View style={[styles.badgeCard, { borderColor: badge.color }]}>
            <Text style={styles.badgeIcon}>{badge.icon}</Text>
            <Text style={[styles.badgeName, { color: badge.color }]}>
              {badge.name}
            </Text>
            <Text style={styles.badgeDescription}>
              {badge.description}
            </Text>
          </View>
        </View>

        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Quiz Details</Text>
          <View style={styles.detailsCard}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Technology:</Text>
              <Text style={styles.detailValue}>
                {technology.icon} {technology.name}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Level:</Text>
              <Text style={[styles.detailValue, { color: difficultyColor }]}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Correct Answers:</Text>
              <Text style={styles.detailValue}>{score} out of {totalQuestions}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Accuracy:</Text>
              <Text style={styles.detailValue}>{percentage}%</Text>
            </View>
          </View>
        </View>

        <View style={styles.actionsSection}>
          <TouchableOpacity
            style={[styles.primaryButton, { backgroundColor: difficultyColor }]}
            onPress={navigateToHome}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>🏠 Back to Home</Text>
          </TouchableOpacity>

          <View style={styles.secondaryActions}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={retakeQuiz}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>🔄 Retake Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={viewBadges}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>🏆 View Badges</Text>
            </TouchableOpacity>
          </View>

          {canTryNextLevel() && (
            <TouchableOpacity
              style={[styles.nextLevelButton, { backgroundColor: theme.colors.success }]}
              onPress={tryNextLevel}
              activeOpacity={0.8}
            >
              <Text style={styles.nextLevelButtonText}>
                🚀 Try Next Level
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.encouragementSection}>
          <Text style={styles.encouragementText}>
            {percentage >= 80 
              ? "🎯 Excellent work! Keep challenging yourself with more quizzes."
              : "💡 Practice makes perfect! Review the concepts and try again."
            }
          </Text>
        </View>
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
  resultIcon: {
    fontSize: 80,
    marginBottom: theme.spacing.md,
  },
  resultTitle: {
    fontSize: theme.fontSizes.xxxl,
    fontWeight: 'bold',
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  resultMessage: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.white,
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 22,
  },
  content: {
    padding: theme.spacing.lg,
  },
  scoreSection: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
    ...theme.shadows.lg,
  },
  scoreText: {
    fontSize: theme.fontSizes.xxxl,
    fontWeight: 'bold',
    color: theme.colors.success,
  },
  scoreDivider: {
    fontSize: theme.fontSizes.xl,
    color: theme.colors.textSecondary,
    marginHorizontal: theme.spacing.xs,
  },
  totalText: {
    fontSize: theme.fontSizes.xl,
    color: theme.colors.textSecondary,
  },
  percentageText: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  scoreLabel: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  badgeSection: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  badgeCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    alignItems: 'center',
    borderWidth: 2,
    ...theme.shadows.md,
  },
  badgeIcon: {
    fontSize: 50,
    marginBottom: theme.spacing.md,
  },
  badgeName: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  badgeDescription: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  detailsSection: {
    marginBottom: theme.spacing.xl,
  },
  detailsCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  detailLabel: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    fontWeight: '600',
  },
  detailValue: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.text,
    fontWeight: '600',
  },
  actionsSection: {
    marginBottom: theme.spacing.xl,
  },
  primaryButton: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    ...theme.shadows.md,
  },
  primaryButtonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
  secondaryActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    marginHorizontal: theme.spacing.xs,
    ...theme.shadows.sm,
  },
  secondaryButtonText: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.sm,
    fontWeight: '600',
  },
  nextLevelButton: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    ...theme.shadows.md,
  },
  nextLevelButtonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
  encouragementSection: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  encouragementText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default ResultScreen;