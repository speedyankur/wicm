var data = [];
var args = {};
args.title = "Twitter";
//args.leftImage = '/images/hasDetail.png';
var row = Alloy.createController('peopleRowItem', args).getView();
row.height = "50";
data.push(row);

args = {};
args.title = "Facebook";
//args.leftImage = '/images/hasDetail.png';
var row = Alloy.createController('peopleRowItem', args).getView();
row.height = "50";
data.push(row);



$.tableView.setData(data);
