import { Slot } from 'expo-router';
import { NativeTabs } from 'expo-router/native-tabs';
import { useThemeColor } from '@/components/Themed';
import { useSettingsStore } from '@/store/useSettingsStore';

export default function NativeTabLayout() {
  const useNativeIOSBottomTabs = useSettingsStore(
    (state) => state.useNativeIOSBottomTabs,
  );
  const visibleTabs = useSettingsStore((state) => state.visibleTabs);
  const tintColor = useThemeColor({}, 'primary');
  const inactiveColor = useThemeColor({}, 'textSecondary');
  const surfaceColor = useThemeColor({}, 'surface');
  const minimizeBehavior = undefined;

  if (!useNativeIOSBottomTabs) {
    return <Slot />;
  }

  return (
    <NativeTabs
      minimizeBehavior={minimizeBehavior}
      tintColor={tintColor}
      iconColor={{ default: inactiveColor, selected: tintColor }}
      labelStyle={{
        default: { color: inactiveColor },
        selected: { color: tintColor },
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>首页</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'house', selected: 'house.fill' }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger
        name="publish"
        hidden={!visibleTabs.includes('publish')}
      >
        <NativeTabs.Trigger.Label>发布</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'plus', selected: 'plus.circle.fill' }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger
        name="profile"
        contentStyle={{ backgroundColor: surfaceColor }}
      >
        <NativeTabs.Trigger.Label>我的</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'person', selected: 'person.fill' }}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
