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
import { useApp } from '../context/AppContext';

const { width } = Dimensions.get('window');

const TechnologyScreen = ({ route, navigation }) => {
  const { technology, technologyKey } = route.params;
  const { getBestScore, isLevelCompleted, getAttempts } = useApp();

  const navigateToLevel = (levelKey, levelData) => {
    navigation.navigate('Level', {
      technology,
      technologyKey,
      level: levelKey,
      levelData,
    });
  };

  const LevelCard = ({ levelKey, levelData }) => {
    const isCompleted = isLevelCompleted(technologyKey, levelKey);
    const bestScore = getBestScore(technologyKey, levelKey);
    const attempts = getAttempts(technologyKey, levelKey);
    
    const getDifficultyColor = (level) => {
      switch (level) {
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

    const getDifficultyIcon = (level) => {
      switch (level) {
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

    const difficultyColor = getDifficultyColor(levelKey);
    const difficultyIcon = getDifficultyIcon(levelKey);

    return (
      <TouchableOpacity
        style={styles.levelCard}
        onPress={() => navigateToLevel(levelKey, levelData)}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={[difficultyColor + '15', difficultyColor + '05']}
          style={styles.cardGradient}
        >
          <View style={styles.cardHeader}>
            <View style={styles.levelInfo}>
              <Text style={styles.levelIcon}>{difficultyIcon}</Text>
              <View>
                <Text style={styles.levelName}>{levelData.name}</Text>
                <Text style={styles.levelSubtitle}>
                  {levelData.questions.length} Questions
                </Text>
              </View>
            </View>
            
            {isCompleted && (
              <View style={styles.completedBadge}>
                <Text style={styles.completedIcon}>✅</Text>
              </View>
            )}
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Best Score</Text>
              <Text style={[styles.statValue, { color: difficultyColor }]}>
                {bestScore}/{levelData.questions.length}
              </Text>
            </View>
            
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Attempts</Text>
              <Text style={[styles.statValue, { color: difficultyColor }]}>
                {attempts}
              </Text>
            </View>
            
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Accuracy</Text>
              <Text style={[styles.statValue, { color: difficultyColor }]}>
                {bestScore > 0 
                  ? `${Math.round((bestScore / levelData.questions.length) * 100)}%`
                  : '0%'
                }
              </Text>
            </View>
          </View>

          <View style={styles.cardFooter}>
            <Text style={[styles.startButton, { color: difficultyColor }]}>
              {isCompleted ? 'Retake Quiz' : 'Start Quiz'} →
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[technology.color, technology.color + 'CC']}
        style={styles.header}
      >
        <Text style={styles.technologyIcon}>{technology.icon}</Text>
        <Text style={styles.technologyName}>{technology.name}</Text>
        <Text style={styles.headerSubtitle}>
          Choose your skill level and start testing!
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Select Difficulty Level</Text>
          <Text style={styles.sectionSubtitle}>
            Each level contains 10 carefully crafted questions
          </Text>
        </View>

        <View style={styles.levelsContainer}>
          {Object.entries(technology.levels).map(([levelKey, levelData]) => (
            <LevelCard
              key={levelKey}
              levelKey={levelKey}
              levelData={levelData}
            />
          ))}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>💡 Quiz Information</Text>
          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>⏱️</Text>
            <Text style={styles.infoText}>No time limit - take your time to think</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>🎯</Text>
            <Text style={styles.infoText}>10 questions per level</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>🏆</Text>
            <Text style={styles.infoText}>Earn badges based on your performance</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>🔄</Text>
            <Text style={styles.infoText}>Retake quizzes to improve your score</Text>
          </View>
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
  technologyIcon: {
    fontSize: 60,
    marginBottom: theme.spacing.md,
  },
  technologyName: {
    fontSize: theme.fontSizes.xxxl,
    fontWeight: 'bold',
    color: theme.colors.white,
    textAlign: 'center',
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
  sectionHeader: {
    marginBottom: theme.spacing.xl,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },
  sectionSubtitle: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  levelsContainer: {
    marginBottom: theme.spacing.xl,
  },
  levelCard: {
    marginBottom: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    ...theme.shadows.md,
  },
  cardGradient: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.surface,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  levelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelIcon: {
    fontSize: theme.fontSizes.xxxl,
    marginRight: theme.spacing.md,
  },
  levelName: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    textTransform: 'capitalize',
  },
  levelSubtitle: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  completedBadge: {
    backgroundColor: theme.colors.success + '20',
    borderRadius: theme.borderRadius.round,
    padding: theme.spacing.sm,
  },
  completedIcon: {
    fontSize: theme.fontSizes.lg,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  statValue: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
  cardFooter: {
    alignItems: 'center',
  },
  startButton: {
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
  },
  infoSection: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  infoTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  infoIcon: {
    fontSize: theme.fontSizes.md,
    marginRight: theme.spacing.md,
    width: 24,
  },
  infoText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    flex: 1,
  },
});

export default TechnologyScreen;