// Sandstorm - Personal Cloud Sandbox
// Copyright (c) 2015 Sandstorm Development Group, Inc. and contributors
// All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

Package.describe({
  summary: "Sandstorm package for managing permissions of users on grains.",
  version: "0.1.0",
});

Package.onUse(function (api) {
  api.use("ecmascript");
  api.use(["check", "random", "underscore", "sandstorm-db"], ["server"]);
  api.addFiles(["permissions.js"], "server");
  api.export("SandstormPermissions");
});

Package.onTest(function (api) {
  api.use("ecmascript");
  api.use(["check", "random", "accounts-base", "underscore", "sandstorm-db", "tinytest", "sandstorm-permissions"], ["server"]);
  api.addFiles("permissions-tests.js", "server");
});
