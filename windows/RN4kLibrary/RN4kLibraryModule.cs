using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace 4k.Library.RN4kLibrary
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RN4kLibraryModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RN4kLibraryModule"/>.
        /// </summary>
        internal RN4kLibraryModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RN4kLibrary";
            }
        }
    }
}
