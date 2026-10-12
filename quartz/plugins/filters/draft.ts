import { QuartzFilterPlugin } from "../types"

export const RemoveDrafts: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveDrafts",
  shouldPublish(_ctx, [_tree, vfile]) {
    const fm = vfile.data?.frontmatter
    const isDraft = fm?.draft === true || fm?.draft === "true"
    const isUnpublished = fm?.publish === false || fm?.publish === "false" || fm?.published === false || fm?.published === "false"
    const isSecret = fm?.status === "secret" || fm?.status === "private"
    return !(isDraft || isUnpublished || isSecret)
  },
})
