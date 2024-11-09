export default {
  index: {
    display: 'hidden',
    theme: {
      breadcrumb: false,
      footer: true,
      sidebar: false,
      toc: false,
      pagination: false,
    },
  },
  overview: {
    title: 'Overview',
    type: 'page',
  },
  'module-sdk': { title: 'ModuleSDK', type: 'page' },
  modulekit: { title: 'ModuleKit', type: 'page' },
  solidity: {
    title: 'Helpers',
    type: 'menu',
    items: {
      'erc4337-data-libs': {
        title: 'ERC4337 Data Libs',
        href: '/erc4337-data-libs',
      },
      checknsignatures: {
        title: 'CheckNSignatures',
        href: '/checknsignatures',
      },
      'erc4337-validation': {
        title: 'ERC4337 Validation',
        href: '/erc4337-validation',
      },
      sandbox: {
        title: 'ModuleSandbox',
        href: '/sandbox',
      },
    },
  },
  'erc4337-data-libs': {
    title: 'ERC4337 Data Libs',
    type: 'page',
    display: 'hidden',
  },
  checknsignatures: {
    title: 'CheckNSignatures',
    type: 'page',
    display: 'hidden',
  },
  'erc4337-validation': {
    title: 'ERC4337 Validation',
    type: 'page',
    display: 'hidden',
  },
  sandbox: { title: 'ModuleSandbox', type: 'page', display: 'hidden' },
  infrastructure: {
    title: 'Infrastructure',
    type: 'menu',
    items: {
      registry: {
        title: 'Module Registry',
        href: '/module-registry',
      },
      safe7579: {
        title: 'Safe7579',
        href: '/safe7579',
      },
      automations: {
        title: 'Automations',
        href: '/automations',
      },
    },
  },
  'module-registry': {
    title: 'Module Registry',
    type: 'page',
    display: 'hidden',
  },
  safe7579: {
    title: 'Safe7579',
    type: 'page',
    display: 'hidden',
  },
  automations: {
    title: 'Automations',
    type: 'page',
    display: 'hidden',
  },
}
