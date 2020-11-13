import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as logs from "@aws-cdk/aws-logs";

export class CdkLambdaLogretentionStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const myLambda = new lambda.Function(this, "MyLambda", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(
        'exports.handler = function(event, ctx, cb) { return cb(null, "hi"); }'
      ),
      logRetention: logs.RetentionDays.ONE_WEEK,
    });

    /*
    const logRetention = new lambda.LogRetention(this, "test", {
      logGroupName: myLambda.logGroup.logGroupName,
      retention: logs.RetentionDays.ONE_WEEK,
    });
    */

    //const cfnLambda = logRetention.node.defaultChild as lambda.CfnFunction;

    //console.log("******" + logRetention.node.findAll());

    //console.log("######" + myLambda.node.findAll());

    //cfnLambda.addPropertyOverride("Runtime", "nodejs12.x");

    const stack = cdk.Stack.of(this);

    const uniqueid = "LogRetentionaae0aa3c5b4d4f87b02d85b201efdd8a";

    const uniqueid2 = "LogRetention";

    //console.log("@@@" + stack.node.tryFindChild(uniqueid));

    //console.log("###" + stack.node.findAll());
    console.log(
      stack.node.children.filter((child) => child instanceof lambda.Function)
    );

    const fn = stack.node.tryFindChild(uniqueid) as lambda.Function;

    console.log("&&&" + stack.node.tryFindChild("MyLambda").node.addr);

    const cfnFn = fn.node.defaultChild as lambda.CfnFunction;

    cfnFn.addPropertyOverride("Runtime", "nodejs12.x");

    //cfnFn.runtime = "nodejs12.x";
  }
}
