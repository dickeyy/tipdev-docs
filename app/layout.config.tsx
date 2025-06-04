import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <div className="flex items-center gap-2">
                <p className="font-mono">{"{$}"}</p>
                <p className="font-sans text-lg font-bold">tip.dev docs</p>
            </div>
        ),
        transparentMode: "always"
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: []
};
