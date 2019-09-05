import React, { useState } from 'react';
import faqs from '../../assets/staticData/staticFAQ';

const MoreInfoPage = () => {
  const [answer, setAnswer] = useState('');
  const [pageY, setPageY] = useState(0);

  const questions = (cat) => {
    const group = faqs.filter(q => q.category.includes(cat));
    return group.map(faq => (
      <button
        className="faq-question"
        type="button"
        // role="button"
        // aria-pressed="false"
        key={faq.id}
        onClick={(e) => {
          e.persist();
          setAnswer(faq.answer);
          setPageY(e.pageY);
        }}
      >
        {faq.question}
      </button>
    ));
  };
  const resourceList = [
    'Basic Needs',
    'Government Benefits; City, County, State, Federal',
    'Domestic Violence/Abuse',
    'Homelessness',
    'Legal, Court, Court Ordered Services',
    'Mental Health',
    'Physical Health Care',
    'Specific Needs/Populations',
    'State/County/Government Entities',
    'Substance Abuse',
    'Suicide',
    'Veterans'
  ];
  const reasonsList = [
    'depression',
    'substance use',
    'grief & loss',
    'self injury',
    'suicidal thoughts',
    'bullying',
    'stress',
    'parenting concerns',
    'trauma',
    'drugs & alcohol',
    'relationship problems',
    'family crisis',
    'anxiety',
    'domestic violence',
    'homelessness',
    'disability',
    'recovery support',
    'resource questions',
    'concerns for a friend or family member'
  ];

  return (
    <section className="more-info-section">
      <h2 className="more-info-page-heading">Learn More</h2>
      <article className="common-reasons-article learn-article">
        <h3 className="more-info-heading">Common reasons people call for help:</h3>
        <ul className="reasons-ul">
          {reasonsList.map(li => (
            <li className="reasons-li">{li}</li>
          ))}
        </ul>
      </article>
      <article className="faq-article learn-article">
        <h3 className="more-info-heading">Frequently Asked Questions (FAQs)</h3>
        <h4>General</h4>
        <div className="questions-wrapper">{questions('general')}</div>
        <h4>Confidentiality</h4>
        <div className="questions-wrapper">{questions('confidentiality')}</div>
        <h4>Specific Concern</h4>
        <div className="questions-wrapper">{questions('specific concern')}</div>
        <h4>Text</h4>
        <div className="questions-wrapper">{questions('text')}</div>
        <h4>Walk-in</h4>
        <div className="questions-wrapper">{questions('walk-in')}</div>
        {answer && (
          <div
            className="answer-modal"
            // style={{ transform: `translate(0, ${pageY - 60}px)` }}
            role="dialog"
            aria-labelledby="dialog1Title"
            aria-describedby="dialog1Desc"
          >
            <h5 className="answer-heading" id="dialog1Title">
              Answer:
            </h5>
            <button type="button" className="close-answer-btn" onClick={() => setAnswer('')}>
              <img
                className="x-icon"
                alt="close answer modal icon"
                aria-hidden="true"
                tab-index="0"
                src={require('../../assets/images/icons/cancel-x.svg')}
              />
              <span className="hidden-text">Close answer window</span>
            </button>
            <p id="dialog1Desc" className="faq-answer">
              {answer}
            </p>
          </div>
        )}
      </article>
      <article className="learn-article resources-article">
        <h3 className="more-info-heading">Other Resources</h3>
        <p className="resources-desc">
          Get help with:
          <ul>
            {resourceList.map(li => (
              <li className="resources-li">{li}</li>
            ))}
          </ul>
        </p>
        <a
          href="https://rmcrisispartners.org/home/services/directory/"
          className="resource-directory-link"
        >
          <p className="resource-directory-text">find resources in Colorado</p>
        </a>
      </article>
    </section>
  );
};

export default MoreInfoPage;
