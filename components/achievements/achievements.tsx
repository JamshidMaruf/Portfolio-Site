import * as React from 'react'
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers,
  FiBarChart2,
} from 'react-icons/fi'
import { FaTools } from 'react-icons/fa'
import { VStack, Heading, Box, Link, LinkProps } from '@chakra-ui/react'
import { TimelineItem } from './Timeline'
import { PageSlideFade } from 'components/shared/animations/page-transitions'
import Header from 'components/shared/header'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'

interface ExternalLinkProps extends LinkProps {
  url: string
  linkProps?: LinkProps
  text: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}
const Achievements = () => {
  const linkColor = useLinkColor()

  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2022
          </Heading>
          <Box>
            <TimelineItem icon={FaTools}>
              Learning in process{' '}
              <ExternalLink
                color={linkColor}
                url="https://www.typescriptlang.org"
                text={'Typescript'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              .NET Bootcamp Cource,{' '}
              <ExternalLink
                color={linkColor}
                url="https://najottalim.uz/"
                text={'Najot Talim'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>

        
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021 - 2022
          </Heading>
          <Box>
            <TimelineItem icon={FiBarChart2}>
              Foundation cource{' '}
              <ExternalLink
                color={linkColor}
                url="https://najottalim.uz/"
                text={'Najot Talim'}
                target="_blank"
              />
            </TimelineItem>
          </Box>
        </Box>

        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FiBarChart2}>
            IELTS B2 Certificate{' '}
              <ExternalLink
                color={linkColor}
                url="https://ielts.idp.com/results/score"
                text={'IDP IELTS'}
                target="_blank"
              />
            </TimelineItem>
          </Box>
        </Box>

        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2015
          </Heading>
          <Box>
            <TimelineItem icon={FiHome} skipTrail>
              Master Sportsman Certificate,{' '}
              <ExternalLink
                color={linkColor}
                url="http://sport.ziyonet.uz/uz/kinds/86"
                text={'Uzbek Jang Sanati'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  )
}

export default Achievements
