var graphConfig = new GitGraph.Template({
    branch: {
        color: "black",
        lineWidth: 3,
        spacingX: 60,
        mergeStyle: "straight",
        showLabel: true,                // display branch names on graph
        labelFont: "normal 10pt Arial",
        labelRotation: 0
    },
    commit: {
        spacingY: 30,
        dot: {
            size: 8,
            strokeColor: "black",
            strokeWidth: 4
        },
        tag: {
            font: "normal 10pt Arial",
            color: "yellow"
        },
        message: {
            color: "black",
            font: "normal 12pt Arial",
            displayAuthor: false,
            displayBranch: false,
            displayHash: false,
        }
    }
});

var Config = function(elementId) {
    this.elementId = elementId;
    this.template = graphConfig;
    this.mode = "extended";
    this.orientation = "vertical";
    this.reverseArrow = true;
}

function onClickCommit(args) {
    return function(commit) {
        gitgraph.commit(args);
    };
}

gitgraph = new GitGraph(new Config("masterOneFeature"));
gitgraph.branch({name: "master"});
gitgraph.commit({message: "chore: initial empty commit"});
gitgraph.commit({message: "chore: initial project layout"});
gitgraph.commit({message: "feat: add first feature"});

gitgraph = new GitGraph(new Config("originMasterOneFeature"));
gitgraph.branch({name: "origin/master"});
gitgraph.commit({message: "chore: initial empty commit"});
gitgraph.commit({message: "chore: initial project layout"});
gitgraph.commit({message: "feat: add first feature", tag: "v1.0.0"});

gitgraph = new GitGraph(new Config("masterOneFix"));
gitgraph.branch({name: "master"});
gitgraph.commit({message: "chore: initial empty commit"});
gitgraph.commit({message: "chore: initial project layout"});
gitgraph.commit({message: "feat: add first feature", tag: "v1.0.0"});
gitgraph.commit({message: "fix: fix for first feature"});

gitgraph = new GitGraph(new Config("originMasterOneFix"));
gitgraph.branch({name: "origin/master"});
gitgraph.commit({message: "chore: initial empty commit"});
gitgraph.commit({message: "chore: initial project layout"});
gitgraph.commit({message: "feat: add first feature", tag: "v1.0.0"});
gitgraph.commit({message: "fix: fix for first feature", tag: "v1.0.1"});

gitgraph = new GitGraph(new Config("masterMultiple"));
gitgraph.branch({name: "master"});
gitgraph.commit({message: "chore: initial empty commit"});
gitgraph.commit({message: "chore: initial project layout"});
gitgraph.commit({message: "feat: add first feature", tag: "v1.0.0"});
gitgraph.commit({message: "fix: fix for first feature", tag: "v1.0.1"});
gitgraph.commit({message: "fix: another fix for first feature"});
gitgraph.commit({message: "feat: second feature"});
gitgraph.commit({message: "fix: fix for second feature"});
gitgraph.commit({message: "feat: third feature\n\nBREAKING CHANGE: this is really incompatible"});

gitgraph = new GitGraph(new Config("originMasterMultiple"));
gitgraph.branch({name: "origin/master"});
gitgraph.commit({message: "chore: initial empty commit"});
gitgraph.commit({message: "chore: initial project layout"});
gitgraph.commit({message: "feat: add first feature", tag: "v1.0.0"});
gitgraph.commit({message: "fix: fix for first feature", tag: "v1.0.1"});
gitgraph.commit({message: "fix: another fix for first feature"});
gitgraph.commit({message: "feat: second feature"});
gitgraph.commit({message: "fix: fix for second feature"});
gitgraph.commit({message: "feat: third feature\n\nBREAKING CHANGE: this is really incompatible", tag: "v2.0.0"});



gitgraph = new GitGraph(new Config("gitflow"));
master = gitgraph.branch({name: "master", column: 5});
master.commit({message: "chore: initial empty commit"});
develop = gitgraph.branch({name: "develop", column: 3});
develop.commit({message: "chore: initial project layout"});
feat1 = develop.branch({name: "feature/1", column: 1});
feat2 = develop.branch({name: "feature/2", column: 0});
feat1.commit({message: "feat: add first feature"});
feat2.commit({message: "feat: second feature"});
feat2.commit({message: "fix: fix for second feature"});
feat1.merge(develop);
feat2.merge(develop);
release = develop.branch({name: "release/1.0.x", column: 4});
release.commit({message: " ", tag: "v1.0.0"});
release.commit({message: "fix: fix for first feature", tag: "v1.0.1"});
release.commit({message: "fix: another fix for first feature", tag: "v1.0.2"});
release.merge(master);
master.merge(develop);
feat3 = develop.branch({name: "feature/3", column: 1});
feat3.commit({message: "feat: third feature\n\nBREAKING CHANGE: this is really incompatible"});
feat3.merge(develop);
release = develop.branch({name: "release/v2.0.x", column: 4});
release.commit({message: " ", tag: "v2.0.0"});
release.merge(master);
master.merge(develop);

gitgraph = new GitGraph(new Config("gitflowWithoutRelease"));
master = gitgraph.branch({name: "master", column: 4});
master.commit({message: "chore: initial empty commit"});
develop = gitgraph.branch({name: "develop", column: 3});
develop.commit({message: "chore: initial project layout"});
feat1 = develop.branch({name: "feature/1", column: 1});
feat2 = develop.branch({name: "feature/2", column: 0});
feat1.commit({message: "feat: add first feature"});
feat2.commit({message: "feat: second feature"});
feat2.commit({message: "fix: fix for second feature"});
feat1.merge(develop);
feat2.merge(develop);
develop.merge(master);
master.commit({message: " ", tag: "v1.0.0"});
master.commit({message: "fix: fix for first feature", tag: "v1.0.1"});
master.commit({message: "fix: another fix for first feature", tag: "v1.0.2"});
master.merge(develop);
feat3 = develop.branch({name: "feature/3", column: 1});
feat3.commit({message: "feat: third feature\n\nBREAKING CHANGE: this is really incompatible"});
feat3.merge(develop);
develop.merge(master);
master.commit({message: " ", tag: "v2.0.0"});
master.merge(develop);
