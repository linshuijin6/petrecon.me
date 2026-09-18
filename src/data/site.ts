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
  { name: 'Gemini', role: 'Reconnaissance', note: 'Broad repository / document traversal', kind: 'model', output: 'Evidence-grounded recon report' },
  { name: 're-handoff', role: 'Verification gate', note: 'Verify critical claims against current repository', kind: 'gate', output: 'Verified plan + drift report' },
  { name: 'Codex', role: 'Implementation', note: 'Repository-level code changes', kind: 'model', output: 'Minimal implementation' },
  { name: 'Claude', role: 'Refinement', note: 'Fine-grained debugging and local semantic adjustment', kind: 'model', output: 'Targeted corrections' },
  { name: 'Human QC + Git', role: 'Scientific validation', note: 'Stage-wise review, tests, checkpoints and traceability', kind: 'human', output: 'Auditable experiment state' }
];

export const clusterStates = ['HOLDING', 'PREWARMING', 'HANDOFF_OUT', 'TASK_OWNED', 'HANDOFF_BACK', 'HOLDING'];
