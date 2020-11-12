#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkLambdaLogretentionStack } from '../lib/cdk-lambda-logretention-stack';

const app = new cdk.App();
new CdkLambdaLogretentionStack(app, 'CdkLambdaLogretentionStack');
