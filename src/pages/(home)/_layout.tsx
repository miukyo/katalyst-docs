import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions()} links={[
    { text: "Getting Started", url: "/docs" },
    { text: "Elements", url: "/docs/new" },
    { text: "State", url: "/docs/get-set" },
    { text: "Utility", url: "/docs/fragment" },
  ]}>{children}</HomeLayout>;
}
