import { useReveal } from '../../hooks/useReveal'
import styles from './Pricing.module.css'

const plans = [
  { name: 'Free',       price: '$0',       period: '',    highlight: false, proPlus: false, enterprise: false },
  { name: 'Pro',        price: '$20',      period: '/mo', highlight: true,  proPlus: false, enterprise: false },
  { name: 'Pro Plus',   price: '$50–$199', period: '/mo', highlight: false, proPlus: true,  enterprise: false },
  { name: 'Enterprise', price: 'Custom',   period: '',    highlight: false, proPlus: false, enterprise: true  },
]

const rows = [
  { feature: 'File size limit',       values: ['5 MB',                  '50 MB',             '500MB / 1GB / 5GB',          'Unlimited']          },
  { feature: 'Row limit',             values: ['2,000 rows',            '50,000 rows',        '500K / 1M / 5M',             'Unlimited']          },
  { feature: 'Experiments / month',   values: ['1',                     '10',                 '30 / 60 / 150',              'Unlimited']          },
  { feature: 'Models tested per run', values: ['3 models',              '6 models',           'All models',                 'All + custom']       },
  { feature: 'LLM tier',              values: ['Basic (Haiku, LLaMA)',  'Basic + Advanced',   'Advanced (Sonnet 4.6, Codex)','All incl. Opus']    },
  { feature: 'NLP transforms',        values: ['3 per project',         'Unlimited',          'Unlimited',                  'Unlimited']          },
  { feature: 'Model download',        values: ['No',                    'Top model only',     'All models',                 'All models']         },
  { feature: 'Experiment report',     values: ['No',                    'PDF only',           'PDF + CSV + JSON',           'Full + custom']      },
  { feature: 'Deploy (API endpoint)', values: ['No',                    'No',                 'Yes',                        'Yes + on-premise']   },
  { feature: 'Model monitoring',      values: ['No',                    'No',                 'Basic dashboard',            'Full drift detection']},
  { feature: 'Team seats',            values: ['1',                     '1',                  'Up to 5',                    'Unlimited']          },
  { feature: 'SSO / SAML',            values: ['No',                    'No',                 'No',                         'Yes']                },
  { feature: 'SLA uptime',            values: ['Best effort',           'Best effort',        '99.5%',                      '99.9%']              },
  { feature: 'Support',               values: ['Community',             'Email 48hr',         'Email 24hr',                 'Dedicated CSM']      },
  { feature: 'Projects stored',       values: ['1 active',              '5 active',           '20/50/Unlimited',            'Unlimited']          },
  { feature: 'Data privacy',          values: ['Shared infra',          'Shared infra',       'Shared infra',               'Private VPC']        },
  { feature: 'Custom model API key',  values: ['No',                    'No',                 'No',                         'Yes']                },
]

const NO_VALUES = new Set(['No', 'no'])
const YES_LIKE = new Set(['Yes', 'Yes + on-premise', 'All models', 'All + custom', 'All incl. Opus',
  'Unlimited', 'Full + custom', 'Full drift detection', 'PDF + CSV + JSON', 'Private VPC',
  'Dedicated CSM', '99.9%', '99.5%'])

function cellClass(val) {
  if (NO_VALUES.has(val)) return styles.cellNo
  if (YES_LIKE.has(val)) return styles.cellYes
  return ''
}

export default function Pricing() {
  useReveal()
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.inner}>
        <div className={`reveal ${styles.header}`}>
          <span className={styles.tag}>Pricing Plans</span>
          <h2 className={styles.heading}>Pricing Plans &amp; Feature Limits</h2>
          <p className={styles.sub}>Everything you need to build, deploy, and monitor ML models at any scale.</p>
        </div>

        <div className={`reveal ${styles.tableWrap}`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featureCol}>Feature</th>
                {plans.map((p, i) => (
                  <th
                    key={i}
                    className={`${styles.planCol} ${p.highlight ? styles.planHighlight : ''} ${p.proPlus ? styles.planProPlus : ''} ${p.enterprise ? styles.planEnterprise : ''}`}
                  >
                    <div className={styles.planName}>{p.name}</div>
                    <div className={styles.planPrice}>
                      {p.price}
                      {p.period && <span className={styles.planPeriod}>{p.period}</span>}
                    </div>
                    <a
                      href={p.enterprise ? '/contact' : '#'}
                      className={`${styles.planBtn} ${p.highlight ? styles.planBtnPrimary : p.proPlus ? styles.planBtnProPlus : p.enterprise ? styles.planBtnEnterprise : styles.planBtnSecondary}`}
                    >
                      {p.enterprise ? 'Contact Us' : 'Request Early Access'}
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                  <td className={styles.featureCell}>{row.feature}</td>
                  {row.values.map((val, ci) => (
                    <td
                      key={ci}
                      className={`${styles.valueCell} ${plans[ci].highlight ? styles.colHighlight : ''} ${plans[ci].proPlus ? styles.colProPlus : ''} ${plans[ci].enterprise ? styles.colEnterprise : ''} ${cellClass(val)}`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
