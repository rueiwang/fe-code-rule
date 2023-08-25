module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['hooks'],
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
    },
  ],
  ecmaFeatures: {
    jsx: true,
  },
  rules: {
    'func-style': ['error', 'declaration'],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // node builtin module → external package
          ['internal'], // → internal module
          ['index', 'sibling', 'parent', 'object', 'type'], // → sort by relative path: index → ./ → ../ → object-import → type import
        ],
        pathGroups: [
          {
            pattern: 'react*/**',
            group: 'external',
            position: 'before',
            patternOptions: { partial: true, nocomment: true },
          },
          {
            // "import './style.css'" need to be imported at the end of the imports list
            pattern: '*.+(css|less|scss|sass|pcss|styl)',
            group: 'type',
            patternOptions: { matchBase: true },
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react*/**'], // react 開頭都排第一個
        alphabetize: {
          order:
            'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
        warnOnUnassignedImports: true,
      },
    ],
    'hooks/sort': [
      2,
      {
        groups: [
          'useState',
          'useRef',
          'useSelector',
          'useDispatch',
          'useReducer',
          'useContext',
          'useCallback',
          'useMemo',
          'useEffect',
        ],
      },
    ],
  },
};
