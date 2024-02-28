---
title: 如何在Windows上调试librime源代码
tags:
- Windows
- Librime
- 调试
- 声笔
---

我习惯使用Visual Studio，所以试图在Windows上调试librime 1.7.3源代码，但是遇到了遇到了不少的问题，经过多方探索，终于成功，做个记录作为备忘。

同时，我打算把声笔使用的librime从1.5.3升级到1.7.3，以解决同文的新版同步问题，估计Mac和Linux的编译问题也会减少。

按照官方的三步，编译release版是不会遇到问题的。但是，如果按照以下三步编译debug版，

1. build boost debug
2. build deps debug
3. build debug

在第3步时，会提示冲突。分析发现，第二步在lib目录下生成的依赖库有几个名称不对，需要手动改为与release版一样的名称。

在用VS打开debug版后，将rime项目属性的输出目录改为`$(SolutionDir)bin\`，将rime_api_console设为启动项目，并将其配置属性中Debugging中的工作目录也改为`$(SolutionDir)bin\`。

在默认情况下，官方的librime不会编译rime_console、rime_deployer和rime_dictionary_manager。不过，在官方librime的issues中，有人介绍了Windows下成功编译它们的方法（https://github.com/rime/librime/issues/479）。需要注意的是，必须在tools/CMakelists.txt中注释掉if(NOT (WIN32 AND BUILD_SHARED_LIBS))和对应的endif()，同时加上install(TARGETS rime_deployer DESTINATION ${BIN_INSTALL_DIR})。但是，仍然出现了链接deployer时出现了错误：unresolved external symbol "char const * * rime::kDeployerModules"，而console和dictionary_manager都正常，还没有找到原因。

librime 1.5.3的调试方法也是类似的，只是依赖仍然为thirdparty而不是deps。

==== 2023年11月19日更新 ====

为了支持Hamster使用的LibrimeKit中引用的原版librime的commit a608767，在声笔的librime中对该commit进行了合并，在解决冲突后通过了github上的CI编译，仅发现CI编译的Windows版的librime会导致声笔简码、声笔自然和声笔小鹤的字词重码顺序混乱。同时，本地编译无法通过，原因是Service类中的StartService与Windows的一个头文件中的同名函数有冲突。为了进行本地调试，可以采用一个hack的办法了解决，即就StartService改名为Start_Service。同样的代码，在本地调试时，声笔简码、声笔自然和声笔小鹤的字词重码顺序是正常的。不过，这样一来，用这样的librime编译的本地weasel在运行的时候会出错，所以不能作为正式本版发布。

==== 2024年2月16日更新 ====

lua版声笔（目前比较正常的是20240213发布的版本）采用原版的rime，紧跟rime的更新步伐，最新的是librime 1.10.0，在Windows编译Build版是很顺利的，但是在编译Debug版时，不但要手动改Deps中glog和yaml-cpp的lib名称，而且运行rime_api_console会出现Assert失败，无法运行，从而无法跟踪调试。这个问题，让我郁闷和烦燥了一周多，终于在今天偶然发现可以用Build版的rime.dll来欺骗Visual Studio，从而实现跟踪调试。

==== 2024年2月23日更新 ====

为了进行跟踪调试，其实不必非要编译debug版的程序，只需要在用VS编译release版时，在项目属性的链接器选项的调试项中，将「生成调试信息」一项设置为「生成调试信息(/DEUBG)」就行了。librime 1.9.0已经这么设置了，只是rime_api_console没有这么设置，所以不能从这个程序中开始调试，但在librime中设置的断点，仍然可以命中的。也就是说，若小狼毫采用这种带调试信息的release版和.pdb文件，那么也是可以通过附加到进程的方式来调试rime.dll的，前提是用VS编译源代码，并将rime.dll生成到rime的共享目录中。
