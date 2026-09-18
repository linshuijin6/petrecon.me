export const profile = {
  name: 'Shuijin Lin',
  nameZh: '林水锦',
  role: 'Ph.D. Student in Biomedical Engineering',
  institution: "Xi'an Jiaotong University",
  lab: 'IMED Institute / LADDER Lab',
  email: 'shuijinlin@stu.xjtu.edu.cn',
  github: 'https://github.com/linshuijin6',
  githubLabel: 'github.com/linshuijin6',
};

export const evidence = [
  { value: 'IEEE TRPMS', label: 'First-author journal paper' },
  { value: '5-Fold + OOF', label: 'Reproducible evaluation' },
  { value: '4', label: 'Production Agent / Skill specs' },
  { value: '5 nodes · 29 GPUs', label: 'Research cluster orchestration' },
];

export const researchProjects = [
  {
    slug: 'mri-to-pet',
    title: 'MRI → PET Multimodal Generation',
    eyebrow: 'Current Ph.D. Research',
    visual: 'mri2pet',
    summary: 'Multimodal MRI-to-PET synthesis with representation alignment, clinical/biomarker conditioning, rigorous cross-validation and OOF evaluation.',
    tags: ['Multimodal Learning', 'CLIP Alignment', 'Foundation Model', 'PEFT', '5-Fold CV', 'OOF'],
    bullets: [
      'Modeling MRI, PET and clinical / biomarker information in a unified multimodal framework.',
      'Exploring CLIP-style representation alignment, foundation-model fine-tuning and parameter-efficient adaptation.',
      'Using fixed 5-fold cross-validation with fold-level training, inference, evaluation and OOF aggregation.',
      'Running controlled ablations such as Full, Shuffle and Zero-input settings with stage-wise scientific QC.'
    ]
  },
  {
    slug: 'duss-pet',
    title: 'DuSS-PET',
    eyebrow: 'First-author Publication · Open Source',
    visual: 'duss',
    summary: 'Self-supervised low-dose PET reconstruction using pseudo-dual-domain consistency without paired data, with a public implementation.',
    tags: ['Low-dose PET', 'Self-supervised', 'Pseudo-Dual-Domain', 'Swin Transformer', 'PyTorch', 'Open Source'],
    bullets: [
      'Led research question formulation, method development, experiments and manuscript preparation as first author.',
      'Implemented training, inference and quantitative evaluation in PyTorch.',
      'Reproduced multiple comparison methods and adapted them to a consistent data and evaluation protocol.',
      'Released the research code publicly for external inspection and further reproducibility.'
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/linshuijin6/DuSS-PET' },
      { label: 'DOI', href: 'https://doi.org/10.1109/TRPMS.2026.3696317' }
    ]
  }
];

export const skills = [
  {
    slug: 'repository-reconnaissance',
    name: 'repository-reconnaissance',
    type: 'Skill',
    summary: 'Evidence-grounded repository reconnaissance before implementation, with explicit confidence states for scientific claims.',
    problem: 'Complex biomedical repositories require broad end-to-end tracing without letting exploration silently become implementation.',
    workflow: ['Task / scientific question', 'End-to-end repository trace', 'Evidence + scientific invariants', 'CONFIRMED / INFERRED / UNRESOLVED', 'Recon report'],
    principles: ['No code modification', 'Evidence before claims', 'Scientific invariant discovery', 'Current repository state first'],
    proof: 'Production Skill in replicaLT'
  },
  {
    slug: 're-handoff',
    name: 're-handoff',
    type: 'Skill',
    summary: 'Repository-grounded verification gate between reconnaissance and implementation, including report-drift detection.',
    problem: 'A reconnaissance report is navigation evidence, not ground truth. Critical claims must be verified against the current repository before implementation.',
    workflow: ['Recon report', 'Targeted repository verification', 'Drift / discrepancy gate', 'Implementation plan', 'Implement', 'Validate'],
    principles: ['Repository as ground truth', 'Baseline preservation', 'Minimal modification', 'Scientific correctness', 'Traceability'],
    proof: 'Production Skill in replicaLT'
  },
  {
    slug: 'research-dev',
    name: 'research-dev',
    type: 'Agent',
    summary: 'Primary research-software implementation agent with explicit scientific guardrails and constrained tool permissions.',
    problem: 'Research code needs implementation velocity without allowing generic refactors, dangerous shell actions, or experiment-definition drift.',
    workflow: ['Understand current code/config', 'Plan', 'Implement minimal change', 'Minimal falsification checks', 'Report'],
    principles: ['Scientific baselines protected', 'Read-only shell by default', 'Dangerous commands denied', 'No unrelated refactors', 'Implementation ≠ scientific result'],
    proof: 'Kiro Agent specification'
  },
  {
    slug: 'cluster-task-orchestrator',
    name: 'cluster-task-orchestrator',
    type: 'Skill / Infrastructure',
    summary: 'GPU-aware multi-node orchestration with VRAM routing, reservation handoff, PID identity checks and completion QC.',
    problem: 'Shared research GPUs need safe dispatch, observable task ownership and reproducible scheduling without requiring training code to hard-code cluster topology.',
    workflow: ['Dashboard / state', 'GPU eligibility + VRAM route', 'Reservation verification', 'Handoff', 'Worker / task', 'PID + status + QC'],
    principles: ['48GB training / 24GB inference routing', 'Strict exclusivity checks', 'Operator-authorized launch', 'PID identity validation', 'Scientific protocol unchanged'],
    proof: 'Production Skill + private dashboard'
  }
];

export const workflow = [
  {
    name: 'Gemini',
    role: 'Reconnaissance',
    note: 'Broad repository / document traversal',
    kind: 'model',
    output: 'Evidence-grounded recon report',
    detailTitle: 'Explore broadly before implementation',
    detail: 'Gemini spends the large context budget on repository traversal, documentation, experiment history and cross-file dependency tracing. It does not own the implementation decision.',
    artifact: 'Repository Reconnaissance Report',
    signals: ['Repository map', 'Execution / data flow', 'Scientific invariants', 'CONFIRMED / INFERRED / UNRESOLVED']
  },
  {
    name: 're-handoff',
    role: 'Verification gate',
    note: 'Verify critical claims against current repository',
    kind: 'gate',
    output: 'Verified plan + drift report',
    detailTitle: 'Treat the handoff as evidence, not authority',
    detail: 'Critical claims from reconnaissance are checked against the live repository. If the report is stale or disagrees with code/config, repository ground truth wins and the discrepancy is surfaced before edits.',
    artifact: 'Verified implementation plan',
    signals: ['Targeted repository verification', 'Report-drift detection', 'Baseline preservation', 'Stop on unresolved scientific ambiguity']
  },
  {
    name: 'Codex',
    role: 'Implementation',
    note: 'Repository-level code changes',
    kind: 'model',
    output: 'Minimal implementation',
    detailTitle: 'Implement against the verified repository state',
    detail: 'Codex handles the main cross-file implementation after the task, invariants and affected paths have been verified. Changes stay local to the requested scientific or engineering intent.',
    artifact: 'Repository patch / implementation',
    signals: ['Cross-file changes', 'Reuse local conventions', 'Minimal scope', 'No unrelated refactor']
  },
  {
    name: 'Claude',
    role: 'Refinement',
    note: 'Fine-grained debugging and local semantic adjustment',
    kind: 'model',
    output: 'Targeted corrections',
    detailTitle: 'Use fine-grained reasoning where precision matters',
    detail: 'Claude is used for localized debugging, semantic edge cases and requirement-level refinements after the main implementation exists, rather than re-owning the entire repository change.',
    artifact: 'Targeted refinement',
    signals: ['Bug localization', 'Local semantic checks', 'Small corrective edits', 'Requirement-level refinement']
  },
  {
    name: 'Human QC + Git',
    role: 'Scientific validation',
    note: 'Stage-wise review, tests, checkpoints and traceability',
    kind: 'human',
    output: 'Auditable experiment state',
    detailTitle: 'Keep scientific decisions human-auditable',
    detail: 'Generated code is not treated as scientifically correct just because it runs. Data split, checkpoint, inference, OOF aggregation and statistics are reviewed stage by stage, with Git preserving the experiment history.',
    artifact: 'Validated + traceable experiment state',
    signals: ['Human-in-the-loop QC', 'Targeted tests', 'Git traceability', 'Implementation ≠ scientific result']
  }
];

export const clusterStates = ['HOLDING', 'PREWARMING', 'HANDOFF_OUT', 'TASK_OWNED', 'HANDOFF_BACK', 'HOLDING'];
