# NativeScript Groceries Template

This repo serves as the starting point for building the [NativeScript Groceries sample](https://github.com/nativescript/sample-Groceries) as part of the [NativeScript JavaScript Getting Started Guide](https://docs.nativescript.org/tutorial/chapter-0).

Please file any issues with this template on the [NativeScript/docs repository](https://github.com/nativescript/docs), which is where the tutorial content lives.

TIPs:

Promises are a part of ECMAScript 6 (the scripting language of which JavaScript is an implementation). Because Promises have been implemented in the two JavaScript engines NativeScript uses—V8 for Android and JavaScriptCore for iOS—Promises are available for use in NativeScript apps.
NativeScript makes fetch() available as a global variable for convenience. This means you can replace fetchModule.fetch() with fetch(). The global fetch() shortcut will be used for the remainder of this guide.

This repository contains the source code of the Progress NativeScript UI samples application. The repository does not contain the source code of UI for NativeScript.


##Steps to run the sample:

```
cd Groceries
tns run android or tns run ios

```
###Release notes:

For more information about releases, features and breaking changes you can check out the release notes section in the online documentation: Progress NativeScript UI release notes
