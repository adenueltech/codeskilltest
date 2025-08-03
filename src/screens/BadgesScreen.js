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

const BadgesScreen = ({ navigation }) => {
  const { badges } = useApp();

  const groupedBadges = badges.reduce((acc, badge) => {
    if (!acc[badge.technology]) {
      acc[badge.technology] = [];
    }
    acc[badge.technology].push(badge);
    return acc;
  }, {});

  const getTechnologyData = (techKey) => {
    return quizData[techKey] || { name: techKey, icon: '📚', color: theme.colors.primary };
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const BadgeCard = ({ badge }) => {
    const techData = getTechnologyData(badge.technology);
    
    return (
      <View style={[styles.badgeCard, { borderColor: badge.color }]}>
        <LinearGradient
          colors={[badge.color + '15', badge.color + '05']}
          style={styles.badgeGradient}
        >
          <View style={styles.badgeHeader}>
            <Text style={styles.badgeIcon}>{badge.icon}</Text>
            <View style={styles.badgeInfo}>
              <Text style={[styles.badgeName, { color: badge.color }]}>
                {badge.name}
              </Text>
              <Text style={styles.badgeLevel}>
                {techData.icon} {techData.name} - {badge.level}
              </Text>
            </View>
          </View>
          
          <Text style={styles.badgeDescription}>
            {badge.description}
          </Text>
          
          <View style={styles.badgeStats}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Score</Text>
              <Text style={styles.statValue}>
                {badge.score}/{badge.totalQuestions}
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Accuracy</Text>
              <Text style={styles.statValue}>
                {Math.round((badge.score / badge.totalQuestions) * 100)}%
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Earned</Text>
              <Text style={styles.statValue}>
                {formatDate(badge.earnedAt)}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  const EmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>🏆</Text>
      <Text style={styles.emptyTitle}>No Badges Yet</Text>
      <Text style={styles.emptyDescription}>
        Complete quizzes to earn badges and show off your skills!
      </Text>
      <TouchableOpacity
        style={styles.startQuizButton}
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.8}
      >
        <Text style={styles.startQuizButtonText}>Start Your First Quiz</Text>
      </TouchableOpacity>
    </View>
  );

  const getBadgeStats = () => {
    const totalBadges = badges.length;
    const masterBadges = badges.filter(badge => badge.name === 'Master').length;
    const expertBadges = badges.filter(badge => badge.name === 'Expert').length;
    
    return { totalBadges, masterBadges, expertBadges };
  };

  const stats = getBadgeStats();

  if (badges.length === 0) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.primaryDark]}
          style={styles.header}
        >
          <Text style={styles.headerTitle}>Your Badges</Text>
          <Text style={styles.headerSubtitle}>
            Showcase your coding achievements
          </Text>
        </LinearGradient>
        <EmptyState />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.primaryDark]}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Your Badges</Text>
        <Text style={styles.headerSubtitle}>
          {stats.totalBadges} badge{stats.totalBadges !== 1 ? 's' : ''} earned
        </Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statCardValue}>{stats.totalBadges}</Text>
            <Text style={styles.statCardLabel}>Total</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statCardValue}>{stats.masterBadges}</Text>
            <Text style={styles.statCardLabel}>Master</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statCardValue}>{stats.expertBadges}</Text>
            <Text style={styles.statCardLabel}>Expert</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        {Object.keys(groupedBadges).length === 0 ? (
          <EmptyState />
        ) : (
          Object.entries(groupedBadges).map(([techKey, techBadges]) => {
            const techData = getTechnologyData(techKey);
            
            return (
              <View key={techKey} style={styles.technologySection}>
                <View style={styles.technologyHeader}>
                  <Text style={styles.technologyIcon}>{techData.icon}</Text>
                  <Text style={styles.technologyName}>{techData.name}</Text>
                  <Text style={styles.badgeCount}>
                    {techBadges.length} badge{techBadges.length !== 1 ? 's' : ''}
                  </Text>
                </View>
                
                {techBadges
                  .sort((a, b) => new Date(b.earnedAt) - new Date(a.earnedAt))
                  .map((badge, index) => (
                    <BadgeCard key={`${badge.technology}-${badge.level}-${index}`} badge={badge} />
                  ))}
              </View>
            );
          })
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            🎯 Keep taking quizzes to earn more badges!
          </Text>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>Continue Learning</Text>
          </TouchableOpacity>
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: theme.borderRadius.lg,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    minWidth: 80,
  },
  statCardValue: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    color: theme.colors.white,
    marginBottom: theme.spacing.xs,
  },
  statCardLabel: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.white,
    opacity: 0.8,
  },
  content: {
    padding: theme.spacing.lg,
  },
  technologySection: {
    marginBottom: theme.spacing.xl,
  },
  technologyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  technologyIcon: {
    fontSize: theme.fontSizes.xl,
    marginRight: theme.spacing.sm,
  },
  technologyName: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    flex: 1,
  },
  badgeCount: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  badgeCard: {
    marginBottom: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    borderWidth: 2,
    ...theme.shadows.md,
  },
  badgeGradient: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.surface,
  },
  badgeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  badgeIcon: {
    fontSize: theme.fontSizes.xxxl,
    marginRight: theme.spacing.md,
  },
  badgeInfo: {
    flex: 1,
  },
  badgeName: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs,
  },
  badgeLevel: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    textTransform: 'capitalize',
  },
  badgeDescription: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
    fontStyle: 'italic',
  },
  badgeStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  statValue: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.xxl,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: theme.spacing.lg,
  },
  emptyTitle: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  emptyDescription: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: theme.spacing.xl,
    paddingHorizontal: theme.spacing.lg,
  },
  startQuizButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.md,
  },
  startQuizButtonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.md,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
  },
  footerText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  continueButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  continueButtonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
  },
});

export default BadgesScreen;