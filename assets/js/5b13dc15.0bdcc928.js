"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6961],{2481:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var a=s(5893),l=s(1151),i=s(4866),o=s(5162);const t={title:"CAT1 Snapshot Generation",sidebar_label:"2. Snapshot Generation",slug:"/guides/cat2-snapshot"},r=void 0,c={id:"guides/cat/cat2-upgrade/cat2-snapshot",title:"CAT1 Snapshot Generation",description:"CAT1 will reach its end of life at block 2,311,760, which will occur on July 26, 2022 at around 17:00 UTC.",source:"@site/docs/guides/cat/cat2-upgrade/cat2-snapshot.md",sourceDirName:"guides/cat/cat2-upgrade",slug:"/guides/cat2-snapshot",permalink:"/guides/cat2-snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/cat/cat2-upgrade/cat2-snapshot.md",tags:[],version:"current",frontMatter:{title:"CAT1 Snapshot Generation",sidebar_label:"2. Snapshot Generation",slug:"/guides/cat2-snapshot"},sidebar:"guides",previous:{title:"1. Intro and FAQ",permalink:"/guides/cat2-intro"},next:{title:"3. Token Reissuance",permalink:"/guides/cat2-issuance"}},d={},h=[{value:"Generate a CAT1 Snapshot",id:"generate",level:2},{value:"Export Your Data from the Snapshot",id:"export",level:2},{value:"Fix EOL Characters",id:"fix-eol",level:2},{value:"Data Cleanup",id:"cleanup",level:2},{value:"Export Data for all CATs",id:"export-all",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:"CAT1 will reach its end of life at block 2,311,760, which will occur on July 26, 2022 at around 17:00 UTC."}),(0,a.jsxs)(n.p,{children:["For more information on this end-of-life process, see the ",(0,a.jsx)(n.a,{href:"/guides/cat2-intro",children:"Intro and FAQ page"}),"."]})]}),"\n",(0,a.jsx)(n.p,{children:"This document will show CAT1 issuers how to:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Generate a snapshot of their CAT1 status. This will show the puzzle hash (address) and value of each individual token at the end-of-life block height"}),"\n",(0,a.jsx)(n.li,{children:"Export their required data from the snapshot"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["After completing this, CAT issuers will be able to proceed to the ",(0,a.jsx)(n.a,{href:"/guides/cat2-issuance",children:"Token Reissuance guide"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"generate",children:"Generate a CAT1 Snapshot"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"We recommend that you follow this section to generate your own snapshot of your CAT1 tokens. Please note that this process could take over 40 hours to complete. For your convenience and reference, we will also publish our own snapshot, which should be identical to the snapshot that you produce."})}),"\n",(0,a.jsxs)(n.p,{children:["This section will show you how to install the ",(0,a.jsx)(n.a,{href:"https://github.com/Chia-Network/CAT-addresses",children:"CAT-addresses tool"})," and use it to get a snapshot of the puzzle hash (address) and value of each coin of a particular CAT1. It can even obtain this info for all CAT1s on Chia's blockchain.'"]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"In order to use this tool, you are required to run a fully synced Chia node. This node must be running version 1.5 or greater. Please ensure that you have satisfied both of these requirements before continuing."})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open a terminal window and ensure you have direct access to the ",(0,a.jsx)(n.code,{children:"chia"})," command by doing one of the following:"]}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],children:[(0,a.jsxs)(o.Z,{value:"windows",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you previously installed Chia from a ",(0,a.jsx)(n.strong,{children:"binary build"}),", then set up an alias to the ",(0,a.jsx)(n.code,{children:"chia"})," command:"]}),"\n"]}),(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Ensure that you replace ",(0,a.jsx)(n.code,{children:"<USERNAME>"})," and ",(0,a.jsx)(n.code,{children:"<VERSION>"})," with the actual folders"]})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:'Set-Alias -Name chia "C:\\Users\\<USERNAME>\\AppData\\Local\\chia-blockchain\\app-<VERSION>\\resources\\app.asar.unpacked\\daemon\\chia.exe"\n'})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you previously installed Chia ",(0,a.jsx)(n.strong,{children:"from source"}),", then navigate to the ",(0,a.jsx)(n.code,{children:"chia-blockchain"})," directory and activate your virtual environment:"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:".\\venv\\Scripts\\Activate.ps1\n"})})]}),(0,a.jsxs)(o.Z,{value:"linux",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If you previously installed Chia from a ",(0,a.jsx)(n.strong,{children:"binary build"}),", then ensure that the ",(0,a.jsx)(n.code,{children:"chia"})," binary's directory is included in your ",(0,a.jsx)(n.code,{children:"PATH"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If you previously installed Chia ",(0,a.jsx)(n.strong,{children:"from source"}),", then navigate to the ",(0,a.jsx)(n.code,{children:"chia-blockchain"})," directory and activate your virtual environment:"]}),"\n"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:". ./activate\n"})})]}),(0,a.jsxs)(o.Z,{value:"macos",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you previously installed Chia from a ",(0,a.jsx)(n.strong,{children:"binary build"}),", then set up an alias to the ",(0,a.jsx)(n.code,{children:"chia"})," command:"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'alias chia="/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon/chia"\n'})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you previously installed Chia ",(0,a.jsx)(n.strong,{children:"from source"}),", then navigate to the ",(0,a.jsx)(n.code,{children:"chia-blockchain"})," directory and activate your virtual environment:"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:". ./activate\n"})})]})]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"chia version\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If step 1 was successful, you should see a version number in the output, such as ",(0,a.jsx)(n.code,{children:"1.5.0"}),". This is a requirement for the snapshot tool to work."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["From the same terminal window, create a new directory in which to install the ",(0,a.jsx)(n.code,{children:"CAT-addresses"})," repository (it can be in the parent directory) and run the following:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Chia-Network/CAT-addresses.git -b main\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The following environment variables need to be set in order to use this tool:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"FULL_NODE_HOSTNAME"})," - The hostname of the full node to call the RPCs against. This can be ",(0,a.jsx)(n.code,{children:"localhost"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"DB_SOURCE_DIR"})," - The location of the full node database on the host machine."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"START_HEIGHT"})," - The height of the blockchain to start creating the snapshot from (default: ",(0,a.jsx)(n.code,{children:"0"}),"). If you are attempting to obtain all records for your CAT, the recommended start height is ",(0,a.jsx)(n.code,{children:"1146800"}),", which is just before CAT1 was introduced."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"TARGET_HEIGHT"})," - The height of the blockchain to end the snapshot (no default - must be set). The recommended height is ",(0,a.jsx)(n.code,{children:"2311760"}),", which is the last block at which CAT1 is valid."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Running this process with the recommended block heights could take over 40 hours to complete. You may wish to test it first by setting the ",(0,a.jsx)(n.code,{children:"TARGET_HEIGHT"})," to ",(0,a.jsx)(n.code,{children:"1146900"}),". This will pull data from only 100 blocks, which should only take a few seconds."]})}),"\n",(0,a.jsxs)(n.p,{children:["In order to set these variables, you are recommended to put them into a file called ",(0,a.jsx)(n.code,{children:".env"})," at the root of the ",(0,a.jsx)(n.code,{children:"CAT-addresses"})," project. The tool will automatically read the variables in this file. For example:"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],children:[(0,a.jsx)(o.Z,{value:"windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=C:\\Users\\Username\\.chia\\mainnet\\db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"})})}),(0,a.jsx)(o.Z,{value:"linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=/home/Username/.chia/mainnet/db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"})})}),(0,a.jsx)(o.Z,{value:"macos",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=/Users/Username/.chia/mainnet/db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"})})})]}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Install dependencies:"}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],children:[(0,a.jsx)(o.Z,{value:"windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"python setup.py install\n"})})}),(0,a.jsx)(o.Z,{value:"linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 setup.py install\n"})})}),(0,a.jsx)(o.Z,{value:"macos",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 setup.py install\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The result may contain several warnings such as ",(0,a.jsx)(n.code,{children:"WARNING: The wheel package is not available."})," These can be safely ignored."]})}),"\n",(0,a.jsx)(n.p,{children:"This command may take a few minutes to complete. At the end of the output, you should see something like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Finished processing dependencies for chia-transaction-exporter==0.1.dev55"\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Install the ",(0,a.jsx)(n.code,{children:"dotenv"})," and ",(0,a.jsx)(n.code,{children:"backoff"})," modules:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install python-dotenv\npip install backoff\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Set up the database:"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],children:[(0,a.jsx)(o.Z,{value:"windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"python setup_database.py\n"})})}),(0,a.jsx)(o.Z,{value:"linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 setup_database.py\n"})})}),(0,a.jsx)(o.Z,{value:"macos",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 setup_database.py\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["If you receive an error message such as ",(0,a.jsx)(n.code,{children:"ModuleNotFoundError: No module named 'chia'"}),", then make sure you can run the ",(0,a.jsx)(n.code,{children:"chia"})," command from this directory and try again."]})}),"\n",(0,a.jsx)(n.p,{children:"If this command succeeds, then it will output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"INFO:setup_database:Setting up database\nINFO:setup_database:Database setup complete\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"8",children:["\n",(0,a.jsx)(n.li,{children:"Start the snapshot generator:"}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],children:[(0,a.jsx)(o.Z,{value:"windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"python start.py\n"})})}),(0,a.jsx)(o.Z,{value:"linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 start.py\n"})})}),(0,a.jsx)(o.Z,{value:"macos",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 start.py\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["This command will show its progress according to the block height. If you used the recommended range for ",(0,a.jsx)(n.code,{children:"START_HEIGHT"})," and ",(0,a.jsx)(n.code,{children:"TARGET_HEIGHT"})," in your ",(0,a.jsx)(n.code,{children:".env"})," file, then this command could take over 40 hours to complete. The reason it takes so long is it needs to process each block, one at a time. If multiple blocks were done in parallel, then there would be a chance that the results would not be accurate. By processing one block at a time, the tool will return the correct results for the range provided."]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"You can only generate a snapshot for each block once. If you attempt to run this command over a range against which it has already been run, you will receive an error containing this message:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"sqlite3.IntegrityError: UNIQUE constraint failed: coin_create.coin_name\n"})}),(0,a.jsxs)(n.p,{children:["In this case, you either need to start from a higher height, or (recommended) start over. Follow the ",(0,a.jsx)(n.a,{href:"#cleanup",children:"Data Cleanup section"})," and try again."]})]}),"\n",(0,a.jsx)(n.h2,{id:"export",children:"Export Your Data from the Snapshot"}),"\n",(0,a.jsx)(n.p,{children:"Once you have populated the database with a snapshot, you can run a data export."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Navigate to ",(0,a.jsx)(n.a,{href:"https://www.taildatabase.com/",children:"taildatabase.com"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Search for your CAT. We'll use ",(0,a.jsx)(n.a,{href:"https://www.taildatabase.com/tail/1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a",children:"CAT King Cole"})," for this example. Note the TAIL hash, which is listed above the title of the token. In this example, it's:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Generate a CSV file containing all inner puzzle hashes and amounts for your CAT:"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],children:[(0,a.jsxs)(o.Z,{value:"windows",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --tail-hash <TAIL-HASH> --coins\n"})}),(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"Example command"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"python export.py --output-dir C:\\Users\\Username\\Chia\\CAT-addresses\\results\\CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n"})})]})]}),(0,a.jsxs)(o.Z,{value:"linux",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --tail-hash <TAIL-HASH> --coins\n"})}),(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"Example command"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 export.py --output-dir /home/Username/CAT-addresses/results/CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n"})})]})]}),(0,a.jsxs)(o.Z,{value:"macos",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --tail-hash <TAIL-HASH> --coins\n"})}),(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"Example command"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 export.py --output-dir /Users/Username/CAT-addresses/results/CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n"})})]})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<OUTPUT-DIR>"})," - a directory of your choice in which to save the CSV file"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<PREFIX>"})," - a string to be prepended to the output file name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<TAIL-HASH>"})," - the TAIL hash you obtained from taildatabase.com"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"--coins"})," - an ",(0,a.jsx)(n.strong,{children:"optional"})," flag that will add information about individual coins to the output (which might be helpful for auditing purposes)"]}),"\n"]})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This command will not create any directories, so make sure ",(0,a.jsx)(n.code,{children:"<OUTPUT-DIR>"})," already exists before running it. Otherwise, you will receive a ",(0,a.jsx)(n.code,{children:"FileNotFoundError"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"fix-eol",children:"Fix EOL Characters"}),"\n",(0,a.jsxs)(n.p,{children:["This step is ",(0,a.jsx)(n.strong,{children:"required for Windows users"}),", and not needed for Linux or macOS users."]}),"\n",(0,a.jsxs)(n.p,{children:["If you are running on Windows, the CSV file will contain an extra CR (carriage return) character at the end of each line. This will cause ",(0,a.jsx)(n.a,{href:"/guides/cat2-issuance#secure-single",children:'"Secure the Bag"'})," to fail. First, you must convert the CSV file to use UNIX-style end-of-line characters."]}),"\n",(0,a.jsxs)(n.p,{children:["The easiest way to accomplish this is with ",(0,a.jsx)(n.code,{children:"dos2unix"}),". This is not included with Windows, so you will need to download it from SourceForge."]}),"\n",(0,a.jsx)(n.p,{children:"Steps to convert the CSV file:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Visit the ",(0,a.jsx)(n.a,{href:"https://sourceforge.net/projects/dos2unix/",children:"SourceForge dos2unix site"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Click the green ",(0,a.jsx)(n.em,{children:'"Download"'})," button. After five seconds, the ",(0,a.jsx)(n.code,{children:"dos2unix"})," zip file will be downloaded to your Downloads folder."]}),"\n",(0,a.jsxs)(n.li,{children:["Unzip the ",(0,a.jsx)(n.code,{children:"dos2unix"})," zip file."]}),"\n",(0,a.jsx)(n.li,{children:"From a PowerShell window, run:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"<path to dos2unix.exe> -o <path to CSV file>\n"})}),"\n",(0,a.jsx)(n.p,{children:"For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"~\\Downloads\\dos2unix\\bin\\dos2unix.exe -o .\\results\\CKC_1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a.1658233083.183527.csv\n"})}),"\n",(0,a.jsx)(n.p,{children:"This message should appear in the output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dos2unix: converting file <CSV file> to Unix format...\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"To verify that the conversion was successful, open the file. There should be no blank lines between the entries."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"cleanup",children:"Data Cleanup"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Optional:"})," If the application exits partway through a run, it will only have imported some blocks at a particular height. You can delete the records from the database at and above a provided height by running the following command:"]}),"\n",(0,a.jsxs)(i.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],children:[(0,a.jsx)(o.Z,{value:"windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"python clean.py --height <BLOCK-HEIGHT>\n"})})}),(0,a.jsx)(o.Z,{value:"linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 clean.py --height <BLOCK-HEIGHT>\n"})})}),(0,a.jsx)(o.Z,{value:"macos",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 clean.py --height <BLOCK-HEIGHT>\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"export-all",children:"Export Data for all CATs"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Optional:"})," If you wish to obtain the balance of all CATs on the Chia blockchain, you can run ",(0,a.jsx)(n.code,{children:"export-py"})," with various different options:"]}),"\n",(0,a.jsxs)(i.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],children:[(0,a.jsxs)(o.Z,{value:"windows",children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--tail-hash"})," flag can be dropped, resulting in an output of a single CSV file containing every puzzle hash amount for every CAT on the Chia blockchain:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX>\n"})}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--coins"})," flag can be added, which will add information about individual coins:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --coins\n"})}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--explode"})," flag can be added, which will generate multiple CSV files, each of which containing a single CAT's puzzle hashes and amounts:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --explode\n"})}),(0,a.jsxs)(n.p,{children:["You can also use the ",(0,a.jsx)(n.code,{children:"--explode"})," and ",(0,a.jsx)(n.code,{children:"--coins"})," flags together, which will generate individual CSV files that also contain coin info."]})]}),(0,a.jsxs)(o.Z,{value:"linux",children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--tail-hash"})," flag can be dropped, resulting in an output of a single CSV file containing every puzzle hash amount for every CAT on the Chia blockchain:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX>\n"})}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--coins"})," flag can be added, which will add information about individual coins:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --coins\n"})}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--explode"})," flag can be added, which will generate multiple CSV files, each of which containing a single CAT's puzzle hashes and amounts:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --explode\n"})}),(0,a.jsxs)(n.p,{children:["You can also use the ",(0,a.jsx)(n.code,{children:"--explode"})," and ",(0,a.jsx)(n.code,{children:"--coins"})," flags together, which will generate individual CSV files that also contain coin info."]})]}),(0,a.jsxs)(o.Z,{value:"macos",children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--tail-hash"})," flag can be dropped, resulting in an output of a single CSV file containing every puzzle hash amount for every CAT on the Chia blockchain:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX>\n"})}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--coins"})," flag can be added, which will add information about individual coins:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --coins\n"})}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--explode"})," flag can be added, which will generate multiple CSV files, each of which containing a single CAT's puzzle hashes and amounts:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --explode\n"})}),(0,a.jsxs)(n.p,{children:["You can also use the ",(0,a.jsx)(n.code,{children:"--explode"})," and ",(0,a.jsx)(n.code,{children:"--coins"})," flags together, which will generate individual CSV files that also contain coin info."]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>o});s(7294);var a=s(512);const l={tabItem:"tabItem_Ymn6"};var i=s(5893);function o(e){let{children:n,hidden:s,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>y});var a=s(7294),l=s(512),i=s(2466),o=s(6550),t=s(469),r=s(1980),c=s(7392),d=s(12);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:l}}=e;return{value:n,label:s,attributes:a,default:l}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const l=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,r._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(l.location.search);n.set(i,e),l.replace({...l.location,search:n.toString()})}),[i,l])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:l}=e,i=u(e),[o,r]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,h]=x({queryString:s,groupId:l}),[j,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,i]=(0,d.Nk)(s);return[l,(0,a.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:l}),g=(()=>{const e=c??j;return p({value:e,tabValues:i})?e:null})();(0,t.Z)((()=>{g&&r(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=s(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(5893);function b(e){let{className:n,block:s,selectedValue:a,selectValue:o,tabValues:t}=e;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,s=r.indexOf(n),l=t[s].value;l!==a&&(c(n),o(l))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=r.indexOf(e.currentTarget)+1;n=r[s]??r[0];break}case"ArrowLeft":{const s=r.indexOf(e.currentTarget)-1;n=r[s]??r[r.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>r.push(e),onKeyDown:h,onClick:d,...i,className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function w(e){let{lazy:n,children:s,selectedValue:l}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,l.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(w,{...e,...n})]})}function y(e){const n=(0,m.Z)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>o});var a=s(7294);const l={},i=a.createContext(l);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);