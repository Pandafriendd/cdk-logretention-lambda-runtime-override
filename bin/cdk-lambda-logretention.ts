#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { CdkLambdaLogretentionStack } from "../lib/cdk-lambda-logretention-stack";
import * as lambda from "@aws-cdk/aws-lambda";

const app = new cdk.App();
const stack = new CdkLambdaLogretentionStack(app, "CdkLambdaLogretentionStack");

// uniqueid = "LogRetentionaae0aa3c5b4d4f87b02d85b201efdd8a";

//const cfnLambda = stack.node.findChild(uniqueid).node as lambda.CfnFunction;
//cfnLambda.addPropertyOverride("Runtime", "nodejs12.x");
