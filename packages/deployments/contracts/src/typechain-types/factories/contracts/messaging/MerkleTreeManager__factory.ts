/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MerkleTreeManager,
  MerkleTreeManagerInterface,
} from "../../../contracts/messaging/MerkleTreeManager";

const _abi = [
  {
    inputs: [],
    name: "MerkleLib__insert_treeIsFull",
    type: "error",
  },
  {
    inputs: [],
    name: "MerkleTreeManager__setArborist_alreadyArborist",
    type: "error",
  },
  {
    inputs: [],
    name: "MerkleTreeManager__setArborist_zeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
    ],
    name: "ArboristUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "arborist",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "branch",
    outputs: [
      {
        internalType: "bytes32[32]",
        name: "",
        type: "bytes32[32]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_arborist",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "insert",
    outputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "leaves",
        type: "bytes32[]",
      },
    ],
    name: "insert",
    outputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rootAndCount",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newArborist",
        type: "address",
      },
    ],
    name: "setArborist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612220806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063c9b0a6de11610071578063c9b0a6de14610220578063d1851c9214610228578063d232c22014610239578063ebf0c71714610262578063fd54b2281461026a57600080fd5b80638da5cb5b146101db578063b1f8100d146101f2578063c4d66de814610205578063c5b350df1461021857600080fd5b806334a55ee6116100e957806334a55ee61461019a5780633cf52ffb146101ad5780634b72d0d4146101b55780636a42b8f8146101ca578063715018a6146101d357600080fd5b806306661abd1461011b5780631b373a98146101325780632d287e431461014757806331d0913c1461016f575b600080fd5b6052545b6040519081526020015b60405180910390f35b610145610140366004611f04565b610274565b005b61015a610155366004611f34565b610362565b60408051928352602083019190915201610129565b605354610182906001600160a01b031681565b6040516001600160a01b039091168152602001610129565b61015a6101a8366004611f63565b610431565b60025461011f565b6101bd61053d565b6040516101299190612021565b62093a8061011f565b610145610579565b6000546201000090046001600160a01b0316610182565b610145610200366004611f04565b6105ac565b610145610213366004611f04565b610659565b610145610774565b61015a6107e4565b6001546001600160a01b0316610182565b6102526000546201000090046001600160a01b03161590565b6040519015158152602001610129565b61011f6107fd565b60525461011f9081565b6000546201000090046001600160a01b031633146102a5576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b0381166102cc57604051630c11a52d60e11b815260040160405180910390fd5b6053546001600160a01b0390811690821681036102fc5760405163606e957b60e11b815260040160405180910390fd5b604080516001600160a01b038084168252841660208201527ff2fa31e21376edb31995720340ba00a41a12a7c8744a9bde552660121f4b7771910160405180910390a150605380546001600160a01b0319166001600160a01b0392909216919091179055565b60535460009081906001600160a01b031633146103b25760405162461bcd60e51b815260206004820152600960248201526808585c989bdc9a5cdd60ba1b60448201526064015b60405180910390fd5b60408051610440810180835261040092869291603291839190820190839060209082845b8154815260200190600101908083116103d65750505091835250506020918201549101529061080e565b80516032906104129082906020611e72565b506020918201519101555060525461042a603261091a565b9150915091565b60535460009081906001600160a01b0316331461047c5760405162461bcd60e51b815260206004820152600960248201526808585c989bdc9a5cdd60ba1b60448201526064016103a9565b6040805161044081018083526000926032918391820190839060209082845b81548152602001906001019080831161049b575050509183525050602091820154910152845190915060005b81811015610505576104fb8682815181106104e4576104e4612057565b60200260200101518461080e90919063ffffffff16565b92506001016104c7565b508151829060329061051a9082906020611e72565b50602091820151908201558201519250610534603261091a565b93505050915091565b610545611eb0565b604080516104008101918290529060329060209082845b81548152602001906001019080831161055c575050505050905090565b6000546201000090046001600160a01b031633146105aa576040516311a8a1bb60e31b815260040160405180910390fd5b565b6000546201000090046001600160a01b031633146105dd576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156105fb575060025415155b15610619576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831662010000909204160361064d57604051634a2fb73f60e11b815260040160405180910390fd5b61065681611cd0565b50565b600054610100900460ff16158080156106795750600054600160ff909116105b806106935750303b158015610693575060005460ff166001145b6106f65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103a9565b6000805460ff191660011790558015610719576000805461ff0019166101001790555b61072282611d1e565b61072a611d4e565b8015610770576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6001546001600160a01b0316331461079f576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426107b19190612083565b116107cf576040516324e0285f60e21b815260040160405180910390fd5b6001546105aa906001600160a01b0316611d7d565b6000806107f1603261091a565b60525490939092509050565b6000610809603261091a565b905090565b610816611ecf565b600083602001805161082790612096565b908190529050600161083b60206002612193565b6108459190612083565b81111561086557604051638eab04bb60e01b815260040160405180910390fd5b60005b60208110156108fa57816001166001036108a15784518490826020811061089157610891612057565b6020020152508391506109149050565b845181602081106108b4576108b4612057565b6020020151846040516020016108d4929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209350600191821c9101610868565b50604051638eab04bb60e01b815260040160405180910390fd5b92915050565b602081015460009080820361095157507f27ae5ba08d7291c96c8cbddcc148bf48a6d68c7974b94356f53754ef6171d75792915050565b6000836001831615610973578054600052600060205260406000209350611226565b60028316156109b85760018101546000527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb56020526040600020935060019150611226565b60048316156109fd5760028101546000527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d306020526040600020935060029150611226565b6008831615610a425760038101546000527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba856020526040600020935060039150611226565b6010831615610a875760048101546000527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a193446020526040600020935060049150611226565b6020831615610acc5760058101546000527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d6020526040600020935060059150611226565b6040831615610b115760068101546000527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a19686020526040600020935060069150611226565b6080831615610b565760078101546000527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f836020526040600020935060079150611226565b610100831615610b9c5760088101546000527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6020526040600020935060089150611226565b610200831615610be25760098101546000527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06020526040600020935060099150611226565b610400831615610c2857600a8101546000527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a560205260406000209350600a9150611226565b610800831615610c6e57600b8101546000527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf89260205260406000209350600b9150611226565b611000831615610cb457600c8101546000527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c60205260406000209350600c9150611226565b612000831615610cfa57600d8101546000527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb60205260406000209350600d9150611226565b614000831615610d4057600e8101546000527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc60205260406000209350600e9150611226565b618000831615610d8657600f8101546000527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d260205260406000209350600f9150611226565b62010000831615610dcd5760108101546000527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6020526040600020935060109150611226565b62020000831615610e145760118101546000527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6020526040600020935060119150611226565b62040000831615610e5b5760128101546000527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06020526040600020935060129150611226565b62080000831615610ea25760138101546000527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06020526040600020935060139150611226565b62100000831615610ee95760148101546000527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26020526040600020935060149150611226565b62200000831615610f305760158101546000527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96020526040600020935060159150611226565b62400000831615610f775760168101546000527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776020526040600020935060169150611226565b62800000831615610fbe5760178101546000527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526020526040600020935060179150611226565b63010000008316156110065760188101546000527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6020526040600020935060189150611226565b630200000083161561104e5760198101546000527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6020526040600020935060199150611226565b630400000083161561109657601a8101546000527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d060205260406000209350601a9150611226565b63080000008316156110de57601b8101546000527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e60205260406000209350601b9150611226565b631000000083161561112657601c8101546000527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e60205260406000209350601c9150611226565b632000000083161561116e57601d8101546000527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea32260205260406000209350601d9150611226565b63400000008316156111b657601e8101546000527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d73560205260406000209350601e9150611226565b63800000008316156111fe57601f8101546000527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a960205260406000209350601f9150611226565b7f27ae5ba08d7291c96c8cbddcc148bf48a6d68c7974b94356f53754ef6171d7579350602091505b601e8211611cc8576001821015611284576002831680156112525760018201546000528460205261127b565b846000527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb56020525b50604060002093505b60028210156112da576004831680156112a8576002820154600052846020526112d1565b846000527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d306020525b50604060002093505b6003821015611330576008831680156112fe57600382015460005284602052611327565b846000527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba856020525b50604060002093505b6004821015611386576010831680156113545760048201546000528460205261137d565b846000527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a193446020525b50604060002093505b60058210156113dc576020831680156113aa576005820154600052846020526113d3565b846000527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d6020525b50604060002093505b60068210156114325760408316801561140057600682015460005284602052611429565b846000527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a19686020525b50604060002093505b6007821015611488576080831680156114565760078201546000528460205261147f565b846000527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f836020525b50604060002093505b60088210156114df57610100831680156114ad576008820154600052846020526114d6565b846000527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6020525b50604060002093505b600982101561153657610200831680156115045760098201546000528460205261152d565b846000527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06020525b50604060002093505b600a82101561158d576104008316801561155b57600a82015460005284602052611584565b846000527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56020525b50604060002093505b600b8210156115e457610800831680156115b257600b820154600052846020526115db565b846000527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926020525b50604060002093505b600c82101561163b576110008316801561160957600c82015460005284602052611632565b846000527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6020525b50604060002093505b600d821015611692576120008316801561166057600d82015460005284602052611689565b846000527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6020525b50604060002093505b600e8210156116e957614000831680156116b757600e820154600052846020526116e0565b846000527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6020525b50604060002093505b600f821015611740576180008316801561170e57600f82015460005284602052611737565b846000527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26020525b50604060002093505b60108210156117985762010000831680156117665760108201546000528460205261178f565b846000527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6020525b50604060002093505b60118210156117f05762020000831680156117be576011820154600052846020526117e7565b846000527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6020525b50604060002093505b60128210156118485762040000831680156118165760128201546000528460205261183f565b846000527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06020525b50604060002093505b60138210156118a057620800008316801561186e57601382015460005284602052611897565b846000527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06020525b50604060002093505b60148210156118f85762100000831680156118c6576014820154600052846020526118ef565b846000527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26020525b50604060002093505b601582101561195057622000008316801561191e57601582015460005284602052611947565b846000527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96020525b50604060002093505b60168210156119a85762400000831680156119765760168201546000528460205261199f565b846000527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776020525b50604060002093505b6017821015611a005762800000831680156119ce576017820154600052846020526119f7565b846000527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526020525b50604060002093505b6018821015611a5957630100000083168015611a2757601882015460005284602052611a50565b846000527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6020525b50604060002093505b6019821015611ab257630200000083168015611a8057601982015460005284602052611aa9565b846000527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6020525b50604060002093505b601a821015611b0b57630400000083168015611ad957601a82015460005284602052611b02565b846000527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06020525b50604060002093505b601b821015611b6457630800000083168015611b3257601b82015460005284602052611b5b565b846000527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6020525b50604060002093505b601c821015611bbd57631000000083168015611b8b57601c82015460005284602052611bb4565b846000527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6020525b50604060002093505b601d821015611c1657632000000083168015611be457601d82015460005284602052611c0d565b846000527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226020525b50604060002093505b601e821015611c6f57634000000083168015611c3d57601e82015460005284602052611c66565b846000527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356020525b50604060002093505b601f821015611cc857638000000083168015611c9657601f82015460005284602052611cbf565b846000527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96020525b50604060002093505b505050919050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b600054610100900460ff16611d455760405162461bcd60e51b81526004016103a99061219f565b61065681611df9565b600054610100900460ff16611d755760405162461bcd60e51b81526004016103a99061219f565b6105aa611e42565b600080546040516001600160a01b03808516936201000090930416917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b03909216620100000262010000600160b01b0319909216919091178155600255600180546001600160a01b0319169055565b600054610100900460ff16611e205760405162461bcd60e51b81526004016103a99061219f565b605380546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff16611e695760405162461bcd60e51b81526004016103a99061219f565b6105aa33611d7d565b8260208101928215611ea0579160200282015b82811115611ea0578251825591602001919060010190611e85565b50611eac929150611eef565b5090565b6040518061040001604052806020906020820280368337509192915050565b6040518060400160405280611ee2611eb0565b8152602001600081525090565b5b80821115611eac5760008155600101611ef0565b600060208284031215611f1657600080fd5b81356001600160a01b0381168114611f2d57600080fd5b9392505050565b600060208284031215611f4657600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215611f7657600080fd5b823567ffffffffffffffff80821115611f8e57600080fd5b818501915085601f830112611fa257600080fd5b813581811115611fb457611fb4611f4d565b8060051b604051601f19603f83011681018181108582111715611fd957611fd9611f4d565b604052918252848201925083810185019188831115611ff757600080fd5b938501935b8285101561201557843584529385019392850192611ffc565b98975050505050505050565b6104008101818360005b602080821061203a575061204e565b82518452928301929091019060010161202b565b50505092915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b818103818111156109145761091461206d565b6000600182016120a8576120a861206d565b5060010190565b600181815b808511156120ea5781600019048211156120d0576120d061206d565b808516156120dd57918102915b93841c93908002906120b4565b509250929050565b60008261210157506001610914565b8161210e57506000610914565b8160018114612124576002811461212e5761214a565b6001915050610914565b60ff84111561213f5761213f61206d565b50506001821b610914565b5060208310610133831016604e8410600b841016171561216d575081810a610914565b61217783836120af565b806000190482111561218b5761218b61206d565b029392505050565b6000611f2d83836120f2565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea26469706673582212205628b96540c1530d2feb1051455344bc74f5de1f26694abb1bc546b6d6ec184064736f6c63430008110033";

type MerkleTreeManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleTreeManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleTreeManager__factory extends ContractFactory {
  constructor(...args: MerkleTreeManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MerkleTreeManager> {
    return super.deploy(overrides || {}) as Promise<MerkleTreeManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MerkleTreeManager {
    return super.attach(address) as MerkleTreeManager;
  }
  override connect(signer: Signer): MerkleTreeManager__factory {
    return super.connect(signer) as MerkleTreeManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleTreeManagerInterface {
    return new utils.Interface(_abi) as MerkleTreeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleTreeManager {
    return new Contract(address, _abi, signerOrProvider) as MerkleTreeManager;
  }
}