import type { ComponentProps, ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { PullToRefresh } from './PullToRefresh';

type PullToRefreshScrollViewProps = Omit<
  ComponentProps<typeof ScrollView>,
  'children'
> & {
  children: ReactNode;
  enabled?: boolean;
  indicatorTop: number;
  onRefresh: () => void | Promise<void>;
  refreshing: boolean;
  backgroundColor: string;
  indicatorColor: string;
  indicatorTrackColor: string;
};

export function PullToRefreshScrollView({
  children,
  enabled,
  indicatorTop,
  onRefresh,
  refreshing,
  backgroundColor,
  indicatorColor,
  indicatorTrackColor,
  ...props
}: PullToRefreshScrollViewProps) {
  return (
    <PullToRefresh
      enabled={enabled}
      indicatorTop={indicatorTop}
      onRefresh={onRefresh}
      refreshing={refreshing}
      backgroundColor={backgroundColor}
      indicatorColor={indicatorColor}
      indicatorTrackColor={indicatorTrackColor}
    >
      <ScrollView showsVerticalScrollIndicator={false} {...props}>
        {children}
      </ScrollView>
    </PullToRefresh>
  );
}
