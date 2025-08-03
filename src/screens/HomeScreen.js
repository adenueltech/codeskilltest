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
import { theme, globalStyles } from '../styles/theme';
import { useApp } from '../context/AppContext';
import { quizData } from '../data/quizData';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const { getProgressPercentage, getTechnologyProgress } = useApp();

  const technologies = Object.keys(quizData);

  const navigateToTechnology = (techKey) => {
    navigation.navigate('Technology', { 
      technology: quizData[techKey],
      technologyKey: techKey 
    });
  };

  const navigateToBadges = () => {
    navigation.getParent()?.navigate('Badges');
  };

  const navigateToProgress = () => {
    navigation.getParent()?.navigate('Progress');
  };

  const TechnologyCard = ({ techKey, techData }) => {
    const progress = getTechnologyProgress(techKey);
    
    return (
      <TouchableOpacity
        style={styles.technologyCard}
        onPress={() => navigateToTechnology(techKey)}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={[techData.color + '20', techData.color + '10']}
          style={styles.cardGradient}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.technologyIcon}>{techData.icon}</Text>
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>{progress.percentage}%</Text>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { 
                      width: `${progress.percentage}%`,
                      backgroundColor: techData.color 
                    }
                  ]} 
                />
              </View>
            </View>
          </View>
          
          <Text style={styles.technologyName}>{techData.name}</Text>
          <Text style={styles.technologySubtitle}>
            {progress.completed}/{progress.total} levels completed
          </Text>
          
          <View style={styles.levelIndicators}>
            {Object.keys(techData.levels).map((level, index) => (
              <View
                key={level}
                style={[
                  styles.levelDot,
                  { 
                    backgroundColor: progress.completed > index 
                      ? techData.color 
                      : theme.colors.border 
                  }
                ]}
              />
            ))}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const StatCard = ({ title, value, onPress, icon }) => (
    <TouchableOpacity style={styles.statCard} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.primaryDark]}
        style={styles.header}
      >
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appTitle}>CodeSkill Test</Text>
        <Text style={styles.subtitle}>Test your front-end skills!</Text>
        
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
        <View style={styles.statsContainer}>
          <StatCard
            title="Your Badges"
            value="🏆"
            icon="🎖️"
            onPress={navigateToBadges}
          />
          <StatCard
            title="Progress"
            value={`${getProgressPercentage()}%`}
            icon="📊"
            onPress={navigateToProgress}
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Choose Your Challenge</Text>
          <Text style={styles.sectionSubtitle}>
            Select a technology to test your skills
          </Text>
        </View>

        <View style={styles.technologiesContainer}>
          {technologies.map((techKey) => (
            <TechnologyCard
              key={techKey}
              techKey={techKey}
              techData={quizData[techKey]}
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            🚀 Challenge yourself • 🧠 Learn & Grow • 🏅 Earn Badges
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
    borderBottomLeftRadius: theme.borderRadius.xl,
    borderBottomRightRadius: theme.borderRadius.xl,
  },
  welcomeText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.white,
    textAlign: 'center',
    opacity: 0.9,
  },
  appTitle: {
    fontSize: theme.fontSizes.xxxl,
    fontWeight: 'bold',
    color: theme.colors.white,
    textAlign: 'center',
    marginVertical: theme.spacing.sm,
  },
  subtitle: {
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
    height: 6,
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  statCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    marginHorizontal: theme.spacing.sm,
    ...theme.shadows.md,
  },
  statIcon: {
    fontSize: theme.fontSizes.xxl,
    marginBottom: theme.spacing.sm,
  },
  statValue: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  statTitle: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  sectionHeader: {
    marginBottom: theme.spacing.lg,
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
  technologiesContainer: {
    marginBottom: theme.spacing.xl,
  },
  technologyCard: {
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
  technologyIcon: {
    fontSize: theme.fontSizes.xxxl,
  },
  progressContainer: {
    alignItems: 'flex-end',
  },
  progressText: {
    fontSize: theme.fontSizes.sm,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  progressBar: {
    width: 60,
    height: 4,
    backgroundColor: theme.colors.border,
    borderRadius: theme.borderRadius.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: theme.borderRadius.sm,
  },
  technologyName: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  technologySubtitle: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  levelIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  levelDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: theme.spacing.xs,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: theme.spacing.lg,
  },
  footerText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default HomeScreen;