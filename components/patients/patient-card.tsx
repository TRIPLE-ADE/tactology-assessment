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
    <View className="border-b border-border-light bg-white">
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className="flex-row items-center px-5 py-4">
        <Avatar src={patient.avatar} name={fullName} size="md" />

        <View className="ml-3 flex-1">
          <Text variant="h3">{fullName}</Text>
          <Text variant="bodySmall" className="mt-0.5">
            {patient.gender} • Age:{patient.age}
          </Text>
        </View>

        <Animated.View style={chevronStyle}>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </Animated.View>
      </TouchableOpacity>

      {/* Expanded Content */}
      {isExpanded && (
        <View className="px-5 pb-5">
          {/* Appointment Badges */}
          <View className="mb-5 flex-row gap-3">
            {patient.lastAppointment && (
              <AppointmentBadge type="last" date={patient.lastAppointment} />
            )}
            {patient.upcomingAppointment && (
              <AppointmentBadge type="upcoming" date={patient.upcomingAppointment} />
            )}
          </View>

          {/* Contact Information */}
          <View className="mb-4">
            <Text variant="body" color="secondary" className="mb-3">
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
