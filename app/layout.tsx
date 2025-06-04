import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./global.css";

const inter = Inter({
    subsets: ["latin"]
});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <body className="flex min-h-screen flex-col">
                <RootProvider
                    search={{
                        enabled: true,
                        options: {
                            api: "https://docs.tip.dev/api/search"
                        }
                    }}
                >
                    <DocsLayout
                        {...baseOptions}
                        nav={{ ...baseOptions.nav, mode: "top" }}
                        tree={source.pageTree}
                    >
                        {children}
                    </DocsLayout>
                </RootProvider>
            </body>
        </html>
    );
}
