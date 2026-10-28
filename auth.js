// HMTxMODS External SHA-256 Role & Permission File (auth.js)
window.authUsers = [
  {
    "label": "Master Admin (pass: test)",
    "role": "admin",
    "sha256": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "permissions": {
      "canAdd": true,
      "canEdit": true,
      "canDelete": true,
      "canPush": true,
      "canConfigGitHub": true,
      "canManageUsers": true
    }
  },
  {
    "label": "Mod Manager (pass: manager123)",
    "role": "manager",
    "sha256": "866485796cfa8d7c0cf7111640205b83076433547577511d81f8030ae99ecea5",
    "permissions": {
      "canAdd": true,
      "canEdit": true,
      "canDelete": false,
      "canPush": true,
      "canConfigGitHub": true,
      "canManageUsers": false
    }
  },
  {
    "label": "Contributor User (pass: user123)",
    "role": "user",
    "sha256": "e606e38b0d8c19b24cf0ee3808183162ea7cd63ff7912222b55880286b420400",
    "permissions": {
      "canAdd": true,
      "canEdit": false,
      "canDelete": false,
      "canPush": false,
      "canConfigGitHub": false,
      "canManageUsers": false
    }
  }
];
