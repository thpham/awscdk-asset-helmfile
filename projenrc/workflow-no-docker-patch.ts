import { JsonPatch } from 'projen';
import { NodeProject } from 'projen/lib/javascript';

export interface WorkflowDockerPatchOptions {
  /**
   * The workflow to patch.
   */
  workflow: 'build' | 'release';
  /**
   * Name of the workflow.
   * @default - same as `workflow`
   */
  workflowName?: string;
}

export class WorkflowNoDockerPatch {
  public constructor(project: NodeProject, options: WorkflowDockerPatchOptions) {
    const workflow = options.workflow;
    const workflowName = options.workflowName ?? options.workflow;

    project.tryFindObjectFile(`.github/workflows/${workflowName}.yml`)?.patch(
      JsonPatch.remove(`/jobs/${workflow}/container`),
    );
  }
}
