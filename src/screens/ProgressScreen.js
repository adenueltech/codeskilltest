import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../styles/theme';
import { useApp } from '../context/AppContext';
import { quizData } from '../data/quizData';

const ProgressScreen = ({ navigation }) => {
  const { 
    progress, 
    getProgressPercentage, 
    getTechnologyProgress,
    getBestScore,
    getAttempts,
    totalScore,
    totalQuizzes 
  } = useApp();

  const technologies = Object.keys(quizData);

  const getTechnologyData = (techKey) => {
    return quizData[techKey];
  };

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

  const TechnologyProgress = ({ techKey }) => {
    const techData = getTechnologyData(techKey);
    const techProgress = getTechnologyProgress(techKey);
    
    return (
      <View style={styles.technologyCard}>
        <View style={styles.technologyHeader}>
          <Text style={styles.technologyIcon}>{techData.icon}</Text>
          <View style={styles.technologyInfo}>
            <Text style={styles.technologyName}>{techData.name}</Text>
            <Text style={styles.technologyProgress}>
              {techProgress.completed}/{techProgress.total} levels completed
            </Text>
          </View>
          <View style={styles.progressCircle}>
            <Text style={styles.progressPercentage}>
              {techProgress.percentage}%
            </Text>
          </View>
        </View>
        
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { 
                width: `${techProgress.percentage}%`,
                backgroundColor: techData.color 
              }
            ]} 
          />
        </View>
        
        <View style={styles.levelsContainer}>
          {Object.entries(techData.levels).map(([levelKey, levelData]) => {
            const isCompleted = progress[techKey][levelKey].completed;
            const bestScore = getBestScore(techKey, levelKey);
            const attempts = getAttempts(techKey, levelKey);
            const difficultyColor = getDifficultyColor(levelKey);
            const difficultyIcon = getDifficultyIcon(levelKey);
            
            return (
              <TouchableOpacity
                key={levelKey}
                style={[
                  styles.levelItem,
                  isCompleted && { backgroundColor: difficultyColor + '15' }
                ]}
                onPress={() => navigation.navigate('Level', {
                  technology: techData,
                  technologyKey: techKey,
                  level: levelKey,
                  levelData,
                })}
                activeOpacity={0.8}
              >
                <View style={styles.levelInfo}>
                  <Text style={styles.levelIcon}>{difficultyIcon}</Text>
                  <View style={styles.levelDetails}>
                    <Text style={[styles.levelName, { color: difficultyColor }]}>
                      {levelData.name}
                    </Text>
                    <Text style={styles.levelStats}>
                      {isCompleted 
                        ? `Best: ${bestScore}/${levelData.questions.length} (${attempts} attempts)`
                        : 'Not started'
                      }
                    </Text>
                  </View>
                </View>
                
                <View style={styles.levelStatus}>
                  {isCompleted ? (
                    <Text style={styles.completedIcon}>✅</Text>
                  ) : (
                    <Text style={styles.pendingIcon}>⏳</Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const getOverallStats = () => {
    const totalLevels = technologies.length * 3; // 3 levels per technology
    const completedLevels = technologies.reduce((total, techKey) => {
      return total + getTechnologyProgress(techKey).completed;
    }, 0);
    
    const averageScore = totalQuizzes > 0 ? Math.round(totalScore / totalQuizzes) : 0;
    
    return {
      totalLevels,
      completedLevels,
      averageScore,
    };
  };

  const stats = getOverallStats();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.primaryDark]}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Your Progress</Text>
        <Text style={styles.headerSubtitle}>
          Track your coding journey
        </Text>
        
        <View style={styles.overallProgress}>
          <Text style={styles.overallProgressText}>
            Overall Progress: {getProgressPercentage()}%
          </Text>
          <View style={styles.overallProgressBar}>
            <View 
              style={[
                styles.overallProgressFill, 
                { width: `${getProgressPercentage()}%` }
              ]} 
            />
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Overall Statistics</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statIcon}>🎯</Text>
              <Text style={styles.statValue}>{stats.completedLevels}</Text>
              <Text style={styles.statLabel}>Levels Completed</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statIcon}>📊</Text>
              <Text style={styles.statValue}>{totalQuizzes}</Text>
              <Text style={styles.statLabel}>Quizzes Taken</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statIcon}>⭐</Text>
              <Text style={styles.statValue}>{stats.averageScore}</Text>
              <Text style={styles.statLabel}>Avg Score</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statIcon}>🏆</Text>
              <Text style={styles.statValue}>{totalScore}</Text>
              <Text style={styles.statLabel}>Total Points</Text>
            </View>
          </View>
        </View>

        <View style={styles.technologiesSection}>
          <Text style={styles.sectionTitle}>Technology Progress</Text>
          {technologies.map((techKey) => (
            <TechnologyProgress key={techKey} techKey={techKey} />
          ))}
        </View>

        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsList}>
            <View style={[
              styles.achievementItem,
              getProgressPercentage() >= 25 && styles.achievementCompleted
            ]}>
              <Text style={styles.achievementIcon}>🚀</Text>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>Getting Started</Text>
                <Text style={styles.achievementDescription}>
                  Complete 25% of all levels
                </Text>
              </View>
              <Text style={styles.achievementStatus}>
                {getProgressPercentage() >= 25 ? '✅' : '⏳'}
              </Text>
            </View>
            
            <View style={[
              styles.achievementItem,
              getProgressPercentage() >= 50 && styles.achievementCompleted
            ]}>
              <Text style={styles.achievementIcon}>🎯</Text>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>Halfway There</Text>
                <Text style={styles.achievementDescription}>
                  Complete 50% of all levels
                </Text>
              </View>
              <Text style={styles.achievementStatus}>
                {getProgressPercentage() >= 50 ? '✅' : '⏳'}
              </Text>
            </View>
            
            <View style={[
              styles.achievementItem,
              getProgressPercentage() >= 75 && styles.achievementCompleted
            ]}>
              <Text style={styles.achievementIcon}>🌟</Text>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>Almost There</Text>
                <Text style={styles.achievementDescription}>
                  Complete 75% of all levels
                </Text>
              </View>
              <Text style={styles.achievementStatus}>
                {getProgressPercentage() >= 75 ? '✅' : '⏳'}
              </Text>
            </View>
            
            <View style={[
              styles.achievementItem,
              getProgressPercentage() >= 100 && styles.achievementCompleted
            ]}>
              <Text style={styles.achievementIcon}>🏆</Text>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>Master Coder</Text>
                <Text style={styles.achievementDescription}>
                  Complete all levels
                </Text>
              </View>
              <Text style={styles.achievementStatus}>
                {getProgressPercentage() >= 100 ? '✅' : '⏳'}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.8}
        >
          <Text style={styles.continueButtonText}>Continue Learning</Text>
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
    borderBottomLeftRadius: theme.borderRadius.xl,
    borderBottomRightRadius: theme.borderRadius.xl,
  },
  headerTitle: {
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
    marginBottom: theme.spacing.lg,
  },
  overallProgress: {
    marginTop: theme.spacing.md,
  },
  overallProgressText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
    fontWeight: '600',
  },
  overallProgressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: theme.borderRadius.sm,
    overflow: 'hidden',
  },
  overallProgressFill: {
    height: '100%',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.sm,
  },
  content: {
    padding: theme.spacing.lg,
  },
  statsSection: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
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
  technologiesSection: {
    marginBottom: theme.spacing.xl,
  },
  technologyCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    ...theme.shadows.md,
  },
  technologyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  technologyIcon: {
    fontSize: theme.fontSizes.xl,
    marginRight: theme.spacing.md,
  },
  technologyInfo: {
    flex: 1,
  },
  technologyName: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  technologyProgress: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressPercentage: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  progressBar: {
    height: 6,
    backgroundColor: theme.colors.border,
    borderRadius: theme.borderRadius.sm,
    overflow: 'hidden',
    marginBottom: theme.spacing.md,
  },
  progressFill: {
    height: '100%',
    borderRadius: theme.borderRadius.sm,
  },
  levelsContainer: {
    gap: theme.spacing.sm,
  },
  levelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.background,
  },
  levelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  levelIcon: {
    fontSize: theme.fontSizes.lg,
    marginRight: theme.spacing.md,
  },
  levelDetails: {
    flex: 1,
  },
  levelName: {
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
    textTransform: 'capitalize',
  },
  levelStats: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.textSecondary,
  },
  levelStatus: {
    marginLeft: theme.spacing.md,
  },
  completedIcon: {
    fontSize: theme.fontSizes.lg,
  },
  pendingIcon: {
    fontSize: theme.fontSizes.lg,
  },
  achievementsSection: {
    marginBottom: theme.spacing.xl,
  },
  achievementsList: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    opacity: 0.6,
  },
  achievementCompleted: {
    opacity: 1,
  },
  achievementIcon: {
    fontSize: theme.fontSizes.lg,
    marginRight: theme.spacing.md,
    width: 30,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  achievementDescription: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  achievementStatus: {
    fontSize: theme.fontSizes.lg,
  },
  continueButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    ...theme.shadows.md,
  },
  continueButtonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
});

export default ProgressScreen;