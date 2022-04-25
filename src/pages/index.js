import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SignupForm from '@site/src/components/signup-form'
import CodeBlock from '@theme/CodeBlock';

const features = [
  {
    title: <>Build web apps in your language</>,
    imageUrl: 'img/home-languages.svg',
    description: (
      <>
        Add rich interactive web UI to your backend apps, scripts, jobs written in <a href="/docs/tutorials/python">Python</a>, <a href="/docs/tutorials/bash">Bash</a>, <a href="/docs/tutorials/powershell">PowerShell</a> or <a href="/docs/tutorials/node">Node.js</a>.
      </>
    ),
  },
  {
    title: <>No HTML/CSS/JavaScript required</>,
    imageUrl: 'img/home-no-html.svg',
    description: (
      <>
        Focus on your work rather than fighting with endless JavaScript frameworks, HTML templates, requests parsing or state management.
      </>
    ),
  },
  {
    title: <>Something else</>,
    imageUrl: 'img/home-zero-deploy.svg',
    description: (
      <>
        This is another feature we would like to tell you about.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {/* {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )} */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.customFields.heroTitle}`}
      description={`${siteConfig.tagline}`}>
      <div className="container">
        <header className={clsx('flet-hero', styles.heroBanner)}>
          <div className="row">
            <div className="col">
              <h1 className="hero__title">{siteConfig.customFields.heroTitle}</h1>
              <p className="hero__subtitle">{siteConfig.customFields.heroSubTitle}</p>
              <div className={styles.buttons}>
                <Link
                  className={styles.indexCtasGetStartedButton}
                  to={useBaseUrl('docs/')}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
      <main>
        <div className='container' style={{ width: '70%', margin: '2rem auto' }}>
          <div className="row">
            <div className="col col--7">
              <h3>Write your program in</h3>
              <Tabs>
                <TabItem value="python" label="Python" default>
                  <CodeBlock className="language-python">
                    {"import flet\nfrom flet import IconButton, Page, Row, TextField, icons\n\ndef main(page: Page):\n    page.title = \"Flet counter example\"\n    page.vertical_alignment = \"center\"\n\n    txt_number = TextField(value=\"0\", text_align=\"right\", width=100)\n\n    def minus_click(e):\n        txt_number.value = int(txt_number.value) - 1\n        page.update()\n\n    def add_click(e):\n        txt_number.value = int(txt_number.value) + 1\n        page.update()\n\n    page.add(\n        Row([\n          IconButton(icons.REMOVE, on_click=minus_click),\n          txt_number,\n          IconButton(icons.ADD, on_click=add_click),\n        ], alignment=\"center\"))\n\nflet.app(target=main)"}
                  </CodeBlock>
                </TabItem>
              </Tabs>
            </div>
            <div className="col col--5">
              <h3>...and run on</h3>
              <Tabs>
                <TabItem value="web" label="Web" default>
                  This is an apple 🍎
                </TabItem>
                <TabItem value="windows" label="Windows">
                  This is an orange 🍊
                </TabItem>
                <TabItem value="macos" label="macOS">
                  This is a banana 🍌
                </TabItem>
                <TabItem value="ios" label="iOS">
                  Coming soon!
                </TabItem>
                <TabItem value="android" label="Android">
                  Coming soon!
                </TabItem>
              </Tabs>
            </div>
          </div>
        </div>
        <SignupForm />
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
