import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-static-site/blog',
    component: ComponentCreator('/docusaurus-static-site/blog', '001'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/blog/archive',
    component: ComponentCreator('/docusaurus-static-site/blog/archive', '497'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-static-site/blog/first-blog-post', '51e'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-static-site/blog/long-blog-post', '79b'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-static-site/blog/mdx-blog-post', 'e91'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/blog/tags',
    component: ComponentCreator('/docusaurus-static-site/blog/tags', '4d4'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-static-site/blog/tags/docusaurus', '24b'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-static-site/blog/tags/facebook', '474'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/blog/tags/hello',
    component: ComponentCreator('/docusaurus-static-site/blog/tags/hello', '604'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/blog/tags/hola',
    component: ComponentCreator('/docusaurus-static-site/blog/tags/hola', 'ba6'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/blog/welcome',
    component: ComponentCreator('/docusaurus-static-site/blog/welcome', '6dc'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/markdown-page',
    component: ComponentCreator('/docusaurus-static-site/markdown-page', '970'),
    exact: true
  },
  {
    path: '/docusaurus-static-site/docs',
    component: ComponentCreator('/docusaurus-static-site/docs', '39a'),
    routes: [
      {
        path: '/docusaurus-static-site/docs/category/tutorial---basics',
        component: ComponentCreator('/docusaurus-static-site/docs/category/tutorial---basics', '5b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-static-site/docs/category/tutorial---extras',
        component: ComponentCreator('/docusaurus-static-site/docs/category/tutorial---extras', 'a97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-static-site/docs/intro',
        component: ComponentCreator('/docusaurus-static-site/docs/intro', 'd1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-static-site/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docusaurus-static-site/docs/tutorial-basics/congratulations', '7fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-static-site/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docusaurus-static-site/docs/tutorial-basics/create-a-blog-post', '7b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-static-site/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docusaurus-static-site/docs/tutorial-basics/create-a-document', '047'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-static-site/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docusaurus-static-site/docs/tutorial-basics/create-a-page', '392'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-static-site/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docusaurus-static-site/docs/tutorial-basics/deploy-your-site', '024'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-static-site/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docusaurus-static-site/docs/tutorial-basics/markdown-features', 'c65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-static-site/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docusaurus-static-site/docs/tutorial-extras/manage-docs-versions', 'cff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-static-site/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docusaurus-static-site/docs/tutorial-extras/translate-your-site', 'a1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docusaurus-static-site/',
    component: ComponentCreator('/docusaurus-static-site/', 'd11'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
