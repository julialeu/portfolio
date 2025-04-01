/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar as RadixThemesAvatar, Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Inset as RadixThemesInset, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Text as RadixThemesText } from "@radix-ui/themes"
import { BackpackIcon as LucideBackpackIcon, BarChart4Icon as LucideBarChart4Icon, BriefcaseIcon as LucideBriefcaseIcon, BugOffIcon as LucideBugOffIcon, FileTextIcon as LucideFileTextIcon, GithubIcon as LucideGithubIcon, LinkedinIcon as LucideLinkedinIcon, LinkIcon as LucideLinkIcon, MailIcon as LucideMailIcon, MapPinIcon as LucideMapPinIcon, ShieldCheckIcon as LucideShieldCheckIcon, TerminalIcon as LucideTerminalIcon } from "lucide-react"
import { isTrue } from "/utils/state"
import NextLink from "next/link"
import { Box } from "@chakra-ui/react"
import NextHead from "next/head"



export function Link_d9c0d92233498aea0483ccbba70a6a42 () {



  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`mailto:leuenberger2101@gmail.com`} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`solid`}>
  <LucideMailIcon css={{"color": "var(--current-color)"}}>
  {`mail`}
</LucideMailIcon>
  {`leuenberger2101@gmail.com`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_37331cea34a3b1a6b9f89b3f409aac31 () {



  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/julia-leuenberger/`} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideLinkedinIcon css={{"color": "var(--current-color)"}}>
  {`linkedin`}
</LucideLinkedinIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_8f7d23633eade06d8fa51192f3ed5575 () {



  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/julialeu`} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideGithubIcon css={{"color": "var(--current-color)"}}>
  {`github`}
</LucideGithubIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_16314e280a0764f8aa3b76ad6aaa1535 () {



  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`/data/cv.pdf`} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideFileTextIcon css={{"color": "var(--current-color)"}}>
  {`file-text`}
</LucideFileTextIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "4em", "paddingBottom": "4em", "maxWidth": "900px", "width": "100%"}} direction={`column`} gap={`6`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`4`}>
  <RadixThemesAvatar size={`8`} src={`/me.png`}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading as={`h1`} size={`8`}>
  {`Julia Leuenberger`}
</RadixThemesHeading>
  <RadixThemesHeading as={`h2`} size={`6`}>
  {`Backend developer`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"display": "inherit"}}>
  <LucideMapPinIcon css={{"color": "var(--current-color)"}}>
  {`map-pin`}
</LucideMapPinIcon>
  {`Barcelona`}
</RadixThemesText>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column"}, "@media screen and (min-width: 30em)": {"flexDirection": "column"}, "@media screen and (min-width: 48em)": {"flexDirection": "row"}}} gap={`2`}>
  <Link_d9c0d92233498aea0483ccbba70a6a42/>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Link_16314e280a0764f8aa3b76ad6aaa1535/>
  <Link_8f7d23633eade06d8fa51192f3ed5575/>
  <Link_37331cea34a3b1a6b9f89b3f409aac31/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading as={`h2`} size={`6`}>
  {`Sobre mí`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`Desarrolladora Full Stack con más de 2 años de experiencia en Laravel, Vue.js, MySQL y APIs RESTful con prelicción por la creación de sistemas robustos, la optimización de código legado y la implementación de arquitecturas escalables.`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesSeparator size={`4`}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`4`}>
  <RadixThemesHeading as={`h2`} size={`6`}>
  {`Tecnologías`}
</RadixThemesHeading>
  <RadixThemesFlex gap={`2`} wrap={`wrap`}>
  <RadixThemesBadge size={`2`}>
  <RadixThemesBox className={`devicon-php-plain`} css={{"fontSize": "24px"}}/>
  <RadixThemesText as={`p`}>
  {`PHP (Laravel)`}
</RadixThemesText>
</RadixThemesBadge>
  <RadixThemesBadge size={`2`}>
  <RadixThemesBox className={`devicon-vuejs-plain`} css={{"fontSize": "24px"}}/>
  <RadixThemesText as={`p`}>
  {`Vue.js`}
</RadixThemesText>
</RadixThemesBadge>
  <RadixThemesBadge size={`2`}>
  <RadixThemesBox className={`devicon-python-plain`} css={{"fontSize": "24px"}}/>
  <RadixThemesText as={`p`}>
  {`Python (FastAPI)`}
</RadixThemesText>
</RadixThemesBadge>
  <RadixThemesBadge size={`2`}>
  <RadixThemesBox className={`devicon-mysql-plain`} css={{"fontSize": "24px"}}/>
  <RadixThemesText as={`p`}>
  {`MySQL`}
</RadixThemesText>
</RadixThemesBadge>
  <RadixThemesBadge size={`2`}>
  <RadixThemesBox className={`devicon-javascript-plain`} css={{"fontSize": "24px"}}/>
  <RadixThemesText as={`p`}>
  {`JavaScript`}
</RadixThemesText>
</RadixThemesBadge>
  <RadixThemesBadge size={`2`}>
  <RadixThemesBox className={`devicon-docker-plain`} css={{"fontSize": "24px"}}/>
  <RadixThemesText as={`p`}>
  {`Docker`}
</RadixThemesText>
</RadixThemesBadge>
  <RadixThemesBadge size={`2`}>
  <RadixThemesBox className={`devicon-git-plain`} css={{"fontSize": "24px"}}/>
  <RadixThemesText as={`p`}>
  {`Git (GitHub, Bitbucket)`}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesHeading as={`h2`} size={`6`}>
  {`Experiencia`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column-reverse"}, "@media screen and (min-width: 30em)": {"flexDirection": "row"}, "width": "100%"}} gap={`4`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`4`}>
  <RadixThemesBadge css={{"aspectRatio": "1"}} variant={`soft`}>
  <LucideTerminalIcon css={{"color": "var(--current-color)"}} size={32}>
  {`terminal`}
</LucideTerminalIcon>
</RadixThemesBadge>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesStrong>
  {`Saalg Geomechanics`}
</RadixThemesStrong>
  <RadixThemesText as={`p`}>
  {`Programadora full stack`}
</RadixThemesText>
  <RadixThemesText as={`p`} color={`gray`} size={`2`}>
  {`Desarrollé un sistema de reporte de incidencias para operadores de máquinas tuneladoras, liderando tanto el desarrollo backend como el frontend. Implementé APIs RESTful con Laravel (validación y middleware) y creé visualizaciones de datos interactivas con Vue.js y Plotly.js. Además, optimicé funcionalidades existentes y trabajé con FastAPI (Python) para generar informes en Excel.`}
</RadixThemesText>
  <Fragment>
  {isTrue([]) ? (
  <Fragment>
  <RadixThemesFlex gap={`2`} wrap={`wrap`}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}>
  {`link`}
</LucideLinkIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideGithubIcon css={{"color": "var(--current-color)"}}>
  {`github`}
</LucideGithubIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <img css={{"height": "200px", "width": "auto", "borderRadius": "1em", "objectFit": "cover"}} src={``}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`end`} direction={`column`} gap={`2`}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <RadixThemesBadge>
  {`agosto 2023 - febrero 2025`}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`solid`}>
  <LucideShieldCheckIcon css={{"color": "var(--current-color)"}}>
  {`shield-check`}
</LucideShieldCheckIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column-reverse"}, "@media screen and (min-width: 30em)": {"flexDirection": "row"}, "width": "100%"}} gap={`4`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`4`}>
  <RadixThemesBadge css={{"aspectRatio": "1"}} variant={`soft`}>
  <LucideBriefcaseIcon css={{"color": "var(--current-color)"}} size={32}>
  {`briefcase`}
</LucideBriefcaseIcon>
</RadixThemesBadge>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesStrong>
  {`Webcargo Freightos`}
</RadixThemesStrong>
  <RadixThemesText as={`p`}>
  {`Junior Backend Developer`}
</RadixThemesText>
  <RadixThemesText as={`p`} color={`gray`} size={`2`}>
  {`Inicié como becaria y posteriormente asumí responsabilidades como desarrolladora backend. Implementé nuevas funcionalidades utilizando PHP (Laravel), MySQL, React y JavaScript. Refactoricé código legado aplicando principios SOLID y arquitectura hexagonal, mejorando el rendimiento y la escalabilidad para la plataforma backoffice del equipo de bookings.`}
</RadixThemesText>
  <Fragment>
  {isTrue([]) ? (
  <Fragment>
  <RadixThemesFlex gap={`2`} wrap={`wrap`}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}>
  {`link`}
</LucideLinkIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideGithubIcon css={{"color": "var(--current-color)"}}>
  {`github`}
</LucideGithubIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <img css={{"height": "200px", "width": "auto", "borderRadius": "1em", "objectFit": "cover"}} src={``}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`end`} direction={`column`} gap={`2`}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <RadixThemesBadge>
  {`Mayo 2022 - Mayo 2023`}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`solid`}>
  <LucideShieldCheckIcon css={{"color": "var(--current-color)"}}>
  {`shield-check`}
</LucideShieldCheckIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesHeading as={`h2`} size={`6`}>
  {`Proyectos`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column-reverse"}, "@media screen and (min-width: 30em)": {"flexDirection": "row"}, "width": "100%"}} gap={`4`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`4`}>
  <RadixThemesBadge css={{"aspectRatio": "1"}} variant={`soft`}>
  <LucideBarChart4Icon css={{"color": "var(--current-color)"}} size={32}>
  {`bar-chart-4`}
</LucideBarChart4Icon>
</RadixThemesBadge>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesStrong>
  {`Agencia de viajes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`}>
  {`En desarrollo`}
</RadixThemesText>
  <RadixThemesText as={`p`} color={`gray`} size={`2`}>
  {`Node.js + Express + MVC Este proyecto es una aplicación web construida con Node.js, Express y Pug como motor de plantillas. Implementa el patrón MVC (Modelo-Vista-Controlador), incluye conexión a una base de datos MySQL y permite manejar rutas, formularios, middlewares y contenido dinámico.`}
</RadixThemesText>
  <Fragment>
  {isTrue([null]) ? (
  <Fragment>
  <RadixThemesFlex gap={`2`} wrap={`wrap`}>
  <RadixThemesBadge color={`gray`}>
  <RadixThemesBox className={`devicon-nodejs-plain`}/>
  {`Node.js + Express`}
</RadixThemesBadge>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}>
  {`link`}
</LucideLinkIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/julialeu`} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideGithubIcon css={{"color": "var(--current-color)"}}>
  {`github`}
</LucideGithubIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <img css={{"height": "200px", "width": "auto", "borderRadius": "1em", "objectFit": "cover"}} src={``}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`end`} direction={`column`} gap={`2`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesBadge>
  {``}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`solid`}>
  <LucideShieldCheckIcon css={{"color": "var(--current-color)"}}>
  {`shield-check`}
</LucideShieldCheckIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column-reverse"}, "@media screen and (min-width: 30em)": {"flexDirection": "row"}, "width": "100%"}} gap={`4`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`4`}>
  <RadixThemesBadge css={{"aspectRatio": "1"}} variant={`soft`}>
  <LucideBugOffIcon css={{"color": "var(--current-color)"}} size={32}>
  {`bug-off`}
</LucideBugOffIcon>
</RadixThemesBadge>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesStrong>
  {`hacker-news-scrapping`}
</RadixThemesStrong>
  <RadixThemesText as={`p`}>
  {`Aplicación de scrapping`}
</RadixThemesText>
  <RadixThemesText as={`p`} color={`gray`} size={`2`}>
  {`API asíncrona desarrollada con FastAPI para extraer noticias de Hacker News, ofreciendo dos endpoints principales para obtener 30 noticias de la primera página o de un rango de páginas especificado. Además, implementa una caché en memoria para disminuir las peticiones repetidas y facilitar la lectura de la información.`}
</RadixThemesText>
  <Fragment>
  {isTrue([null]) ? (
  <Fragment>
  <RadixThemesFlex gap={`2`} wrap={`wrap`}>
  <RadixThemesBadge color={`gray`}>
  <RadixThemesBox className={`devicon-python-plain`}/>
  {`Python (FastAPI)`}
</RadixThemesBadge>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}>
  {`link`}
</LucideLinkIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/julialeu`} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideGithubIcon css={{"color": "var(--current-color)"}}>
  {`github`}
</LucideGithubIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <img css={{"height": "200px", "width": "auto", "borderRadius": "1em", "objectFit": "cover"}} src={``}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`end`} direction={`column`} gap={`2`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesBadge>
  {``}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`solid`}>
  <LucideShieldCheckIcon css={{"color": "var(--current-color)"}}>
  {`shield-check`}
</LucideShieldCheckIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column-reverse"}, "@media screen and (min-width: 30em)": {"flexDirection": "row"}, "width": "100%"}} gap={`4`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`4`}>
  <RadixThemesBadge css={{"aspectRatio": "1"}} variant={`soft`}>
  <LucideBarChart4Icon css={{"color": "var(--current-color)"}} size={32}>
  {`bar-chart-4`}
</LucideBarChart4Icon>
</RadixThemesBadge>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesStrong>
  {`Work with us`}
</RadixThemesStrong>
  <RadixThemesText as={`p`}>
  {`Proyecto de fin de ciclo formativo.`}
</RadixThemesText>
  <RadixThemesText as={`p`} color={`gray`} size={`2`}>
  {`Plataforma web que conecta a empresas y talentos, ofreciendo publicación de vacantes y postulación de manera ágil y sencilla.`}
</RadixThemesText>
  <Fragment>
  {isTrue([null, null]) ? (
  <Fragment>
  <RadixThemesFlex gap={`2`} wrap={`wrap`}>
  <RadixThemesBadge color={`gray`}>
  <RadixThemesBox className={`devicon-php-plain`}/>
  {`PHP (Laravel)`}
</RadixThemesBadge>
  <RadixThemesBadge color={`gray`}>
  <RadixThemesBox className={`devicon-vuejs-plain`}/>
  {`Vue.js`}
</RadixThemesBadge>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}>
  {`link`}
</LucideLinkIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/julialeu`} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideGithubIcon css={{"color": "var(--current-color)"}}>
  {`github`}
</LucideGithubIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <img css={{"height": "200px", "width": "auto", "borderRadius": "1em", "objectFit": "cover"}} src={``}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`end`} direction={`column`} gap={`2`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesBadge>
  {``}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`solid`}>
  <LucideShieldCheckIcon css={{"color": "var(--current-color)"}}>
  {`shield-check`}
</LucideShieldCheckIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesHeading as={`h2`} size={`6`}>
  {`Formación`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column-reverse"}, "@media screen and (min-width: 30em)": {"flexDirection": "row"}, "width": "100%"}} gap={`4`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`4`}>
  <RadixThemesBadge css={{"aspectRatio": "1"}} variant={`soft`}>
  <LucideBackpackIcon css={{"color": "var(--current-color)"}} size={32}>
  {`backpack`}
</LucideBackpackIcon>
</RadixThemesBadge>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesStrong>
  {`Cibernarium`}
</RadixThemesStrong>
  <RadixThemesText as={`p`}>
  {`Fundamentos de la nube y cómo utilizar los servicios más comunes de AWS para desarrollar y gestionar aplicaciones. Utilización de la consola de AWS, EC2, S3 y Lambda.`}
</RadixThemesText>
  <RadixThemesText as={`p`} color={`gray`} size={`2`}>
  {`Cloud Computing con AWS`}
</RadixThemesText>
  <Fragment>
  {isTrue([]) ? (
  <Fragment>
  <RadixThemesFlex gap={`2`} wrap={`wrap`}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}>
  {`link`}
</LucideLinkIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideGithubIcon css={{"color": "var(--current-color)"}}>
  {`github`}
</LucideGithubIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <img css={{"height": "200px", "width": "auto", "borderRadius": "1em", "objectFit": "cover"}} src={``}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`end`} direction={`column`} gap={`2`}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <RadixThemesBadge>
  {`2025`}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`solid`}>
  <LucideShieldCheckIcon css={{"color": "var(--current-color)"}}>
  {`shield-check`}
</LucideShieldCheckIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column-reverse"}, "@media screen and (min-width: 30em)": {"flexDirection": "row"}, "width": "100%"}} gap={`4`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`4`}>
  <RadixThemesBadge css={{"aspectRatio": "1"}} variant={`soft`}>
  <LucideBackpackIcon css={{"color": "var(--current-color)"}} size={32}>
  {`backpack`}
</LucideBackpackIcon>
</RadixThemesBadge>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesStrong>
  {`Ilerna`}
</RadixThemesStrong>
  <RadixThemesText as={`p`}>
  {`Ciclo formativo de grado superior de desarrollo de aplicaciones web.`}
</RadixThemesText>
  <RadixThemesText as={`p`} color={`gray`} size={`2`}>
  {``}
</RadixThemesText>
  <Fragment>
  {isTrue([]) ? (
  <Fragment>
  <RadixThemesFlex gap={`2`} wrap={`wrap`}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}>
  {`link`}
</LucideLinkIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`surface`}>
  <LucideGithubIcon css={{"color": "var(--current-color)"}}>
  {`github`}
</LucideGithubIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <img css={{"height": "200px", "width": "auto", "borderRadius": "1em", "objectFit": "cover"}} src={``}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesFlex align={`end`} direction={`column`} gap={`2`}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <RadixThemesBadge>
  {`2020 - 2022`}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"--cursor-button": "pointer"}} variant={`solid`}>
  <LucideShieldCheckIcon css={{"color": "var(--current-color)"}}>
  {`shield-check`}
</LucideShieldCheckIcon>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesHeading as={`h2`} size={`6`}>
  {`Extra`}
</RadixThemesHeading>
  <Box sx={{"width": "100%", "display": ["block", "none", "none", "none"]}}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`4`}>
  <RadixThemesCard css={{"width": "100%", "href": "", "isExternal": true}}>
  <RadixThemesLink>
  <RadixThemesInset pb={`4`}>
  <img css={{"height": "200px", "width": "100%", "objectFit": "cover"}} src={`/unnamed.jpg`}/>
</RadixThemesInset>
  <RadixThemesStrong>
  {`Gato y Coco`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} color={`gray`} size={`2`}>
  {`Mis dos amores, Gato y Coco`}
</RadixThemesText>
</RadixThemesLink>
</RadixThemesCard>
</RadixThemesFlex>
</Box>
  <Box sx={{"width": "100%", "display": ["none", "block", "block", "block"]}}>
  <RadixThemesGrid columns={`3`} gap={`4`}>
  <RadixThemesCard css={{"width": "100%", "href": "", "isExternal": true}}>
  <RadixThemesLink>
  <RadixThemesInset pb={`4`}>
  <img css={{"height": "200px", "width": "100%", "objectFit": "cover"}} src={`/unnamed.jpg`}/>
</RadixThemesInset>
  <RadixThemesStrong>
  {`Gato y Coco`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} color={`gray`} size={`2`}>
  {`Mis dos amores, Gato y Coco`}
</RadixThemesText>
</RadixThemesLink>
</RadixThemesCard>
</RadixThemesGrid>
</Box>
</RadixThemesFlex>
  <RadixThemesSeparator size={`4`}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Nombre`}
</RadixThemesText>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column"}, "@media screen and (min-width: 30em)": {"flexDirection": "column"}, "@media screen and (min-width: 48em)": {"flexDirection": "row"}}} gap={`2`}>
  <Link_d9c0d92233498aea0483ccbba70a6a42/>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Link_16314e280a0764f8aa3b76ad6aaa1535/>
  <Link_8f7d23633eade06d8fa51192f3ed5575/>
  <Link_37331cea34a3b1a6b9f89b3f409aac31/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`leu-juls| Portafolio`}
</title>
  <meta content={`Desarrolladora Full Stack`} name={`description`}/>
  <meta content={`/me.png`} property={`og:image`}/>
  <meta content={`leu-juls| Portafolio`} name={`og:title`}/>
  <meta content={`Desarrolladora Full Stack`} name={`og:description`}/>
  <meta content={`/me.png`} name={`og:image`}/>
</NextHead>
</Fragment>
  )
}
