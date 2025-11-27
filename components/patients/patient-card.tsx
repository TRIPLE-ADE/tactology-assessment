import React from 'react';
import { View, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  withTiming,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';
import { Patient } from '@/types';
import { Text, Avatar, Button, AppointmentBadge, InfoRow } from '@/components/ui';
import { COLORS } from '@/constants/colors';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface PatientCardProps {
  patient: Patient;
  isExpanded: boolean;
  onPress: () => void;
  onViewProfile: () => void;
  onViewNotes: () => void;
}

export const PatientCard: React.FC<PatientCardProps> = ({
  patient,
  isExpanded,
  onPress,
  onViewProfile,
  onViewNotes,
}) => {
  const fullName = `${patient.firstName} ${patient.lastName}`;
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withTiming(isExpanded ? 1 : 0, { duration: 200 });
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [isExpanded, rotation]);

  const chevronStyle = useAnimatedStyle(() => {
    const rotate = interpolate(rotation.value, [0, 1], [0, 90]);
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  const handleViewNotes = () => {
    onViewNotes();
  };

  return (
    <View className="bg-white rounded-lg">
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className="flex-row items-center px-5 py-4">
        <Avatar src={patient.avatar} name={fullName} size="md" />

        <View className="flex-1 ml-3">
          <Text variant="h2">{fullName}</Text>
          <Text variant="body" color="secondary" className="mt-0.5">
            {patient.gender} • Age:{patient.age}
          </Text>
        </View>

        <Animated.View style={chevronStyle}>
          <Ionicons name="chevron-forward" size={20} color={COLORS.grayLight} />
        </Animated.View>
      </TouchableOpacity>

      {/* Expanded Content */}
      {isExpanded && (
        <View className="px-5 pb-5">
          {/* Appointment Badges */}
          <View className="flex-row w-full gap-3 mb-5">
            {patient.lastAppointment && (
              <AppointmentBadge type="last" date={patient.lastAppointment} className="flex-1" />
            )}
            {patient.upcomingAppointment && (
              <AppointmentBadge type="upcoming" date={patient.upcomingAppointment} className="flex-1" />
            )}
          </View>

          {/* Contact Information */}
          <View className="mb-4">
            <Text variant="body" color="primary" className="mb-3">
              Contact Information
            </Text>
            <InfoRow icon="call-outline" value={patient.phone} />
            <InfoRow icon="mail-outline" value={patient.email} />
          </View>

          {/* Action Buttons */}
          <View className="flex-row gap-3">
            <Button variant="outline" size="sm" onPress={onViewProfile} className="flex-1">
              View profile
            </Button>
            <Button variant="primary" size="sm" onPress={handleViewNotes} className="flex-1">
              Consultation Notes
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};
