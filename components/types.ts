// simplified for sake of demonstration
export type QuartzComponentProps = {
    fileData: QuartzPluginData
    cfg: GlobalConfiguration
    tree: Node<QuartzPluginData>
    allFiles: QuartzPluginData[]
    displayClass?: "mobile-only" | "desktop-only"
}