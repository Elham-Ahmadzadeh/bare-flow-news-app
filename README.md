# news-app
React Native
Steps to Reproduce
expo init
expo eject
open workspace in xcode
run on device (by clicking play button)
open app in xcode



I had to add some config to ios/<your_package_name>/Supporting/Expo.plist, and now it's working like a charm.

    <key>EXUpdatesURL</key>
    <string>https://example.com</string>



