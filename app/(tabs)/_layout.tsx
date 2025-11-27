import React from 'react';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { HomeIcon, PatientsIcon, RecordsIcon, ScheduleIcon, ProfileIcon } from '@/assets/icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        animation: 'shift',
        tabBarActiveTintColor: '#14B8A6',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: Platform.OS === 'ios' ? 84 : 78,
          paddingTop: 8,
          paddingHorizontal: 16,
          paddingBottom: Platform.OS === 'ios' ? 28 : 12,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins_400Regular',
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <HomeIcon size={24} color={focused ? '#14B8A6' : '#9CA3AF'} />
          ),
        }}
      />
      <Tabs.Screen
        name="patients"
        options={{
          title: 'Patients',
          tabBarIcon: ({ focused }) => (
            <PatientsIcon size={24} color={focused ? '#14B8A6' : '#9CA3AF'} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: 'Schedule',
          tabBarIcon: ({ focused }) => (
            <ScheduleIcon size={24} color={focused ? '#14B8A6' : '#9CA3AF'} />
          ),
        }}
      />
      <Tabs.Screen
        name="records"
        options={{
          title: 'Records',
          tabBarIcon: ({ focused }) => (
            <RecordsIcon size={24} color={focused ? '#14B8A6' : '#9CA3AF'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <ProfileIcon size={24} color={focused ? '#14B8A6' : '#9CA3AF'} />
          ),
        }}
      />
    </Tabs>
  );
}
