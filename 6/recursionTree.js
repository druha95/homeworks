/**
 * Created by andrew on 27.11.14.
 */


function getDependecies(tree, result) {
    var dep = tree.dependencies;
    var result = result || {};
    for(var key in dep){
        result[key + "@" + dep[key].version] = 0;
        getDependecies(dep[key], result);
    }
    return Object.keys(result).sort();

}

module.exports = getDependecies;