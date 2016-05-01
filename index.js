


var nodegit = require('atom').GitRepositoryAsync.Git
var GitLogUtils = require('libgit2-log-utils')
var gitLogUtils = new GitLogUtils(nodegit)

// see [libgit2-log-utils](https://github.com/littlebee/libgit2-log-utils)
module.exports = gitLogUtils
