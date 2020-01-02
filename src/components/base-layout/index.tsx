/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Box } from '@theme-ui/components'

type BaseLayoutProps = {
  children: JSX.Element,
  gridProps?: object,
  boxProps?: object,
}

export default function BaseLayout({ children, gridProps = {}, boxProps }: BaseLayoutProps) {
  return (
    <Grid {...gridProps}>
      <Box {...boxProps}>
        {children}
      </Box>
    </Grid>
  )
}