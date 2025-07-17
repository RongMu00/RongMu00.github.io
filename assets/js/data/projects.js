const projectsData = [
    {
        title: "Eagle on Sequoia: Optimizing Speculative Decoding for Faster LLM Inference ",
        date: "Mar 2025 - May 2025",
        description: "• Designed and implemented a hybrid speculative decoding strategy that integrates Sequoia’s dynamic programming-based static tree construction with EAGLE-2’s reranking refinement to accelerate LLM inference\n• Benchmarked LLaMA models (7B, 8B, 13B) on RTX 4090 and A100 GPUs, conducted empirical profiling to guide hardware-aware tree optimization and acceptance probability modeling, achieving 1.5x decoding speedup than vanilla baseline on both A100 and RTX 4090",
        technologies: ["Python", "ML Runtime Optimization"]
    },
    {
        title: "Parallel VLSI Wire Routing via OpenMP and MPI",
        date: "Mar 2025 - Apr 2025",
        description: "• Implemented within-wire and across-wire parallel algorithms using OpenMP and MPI\n• Utilized quadtree data structure and Barnes-Hut algorithm to enhance spatial locality and workload balance, efficiently distributing the computation across multiple processing units\n• Conducted extensive system profiling and tuning, achieving up to 19.73x speedup on 4096x4096 grid with up to 128 threads",
        technologies: ["C++", "OpenMP", "MPI"]
    },
    {
        title: "A High-Performance CUDA Circle Renderer",
        date: "Feb 2025",
        description: "• Implemented a CUDA renderer to render circle-based patterns in pixel-level parallelism\n • Optimized memory and computation efficiency by combining circle-level and pixel-level parallelism, performing exclusive scan for indexing to identify relevant circles within a block, and using shared memory for efficient thread cooperation, improving rendering speed by several hundred times and GPU utilization from 55% to 86% to mitigate memory- and compute-bound bottlenecks",
        technologies: ["C++", "CUDA"]
    },
    {
        title: "Built LIama-2 Model from Scratch ",
        date: "Feb 2025",
        description: "• Implemented a GPT-style model from scratch with absolute position embeddings and multi-head attention (MHA)\n• Upgraded to rotary position embeddings (RoPE) and grouped-query attention (GQA) for better long-context performance and memory-efficient inference",
        technologies: ["PyTorch", "WandB"]
    },
    {
        title: "Dynamic Memory Allocator and Optimization ",
        date: "Oct 2024",
        description: "• Implemented malloc, calloc, realloc, free with first-fit search of a segregated free list• Optimized its utilization from 59% to 74% while maintaining throughputs by applying “footer-less block” and “mini block” techniques",
        technologies: ["C"]
    },
    {
        title: "Linens N Love Connect",
        date: "May 2024 - Aug 2024",
        description: "• Led a team of six to build a fabrics donation automation system from requirement analysis, implementation, to testing and deployment, helping Linens N Love Inc. automate fabrics donation between hotels and shelters and enhance environment sustainability \n• Implemented sharding in MongoDB user schema design to support dynamic data growth and query performance \n• Built frontend using React and MaterialUI and backend using Node.js and Express.js to setup workflows among 5 user subjects \n• Integrated CI/CD using GitHub Actions to build Docker images and automatically deploy them to AWS EC2\n",
        technologies: ["JavaScript", "Node.js", "Express.js", "React", "MongoDB", "Docker", "AWS"]
    },
    // ... more projects
];