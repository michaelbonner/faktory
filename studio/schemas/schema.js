// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'
import workItem from './documents/workItem'

// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import person from './objects/person'
import office from './objects/office'

// Landing page sections
import homeHero from './objects/homeHero'
import titleHero from './objects/titleHero'
import imageSection from './objects/imageSection'
import quoteSection from './objects/quoteSection'
import textSection from './objects/textSection'
import fullSizeImage from './objects/fullSizeImage'
import titleWithGridTextBlocks from './objects/titleWithGridTextBlocks'
import leadershipTeam from './objects/leadershipTeam'
import contactInfoSection from './objects/contactInfoSection'
import workItemsSection from './objects/workItemsSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    person,
    homeHero,
    titleHero,
    imageSection,
    quoteSection,
    internalLink,
    link,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    workItem,
    textSection,
    fullSizeImage,
    titleWithGridTextBlocks,
    leadershipTeam,
    contactInfoSection,
    office,
    workItemsSection
  ])
})
