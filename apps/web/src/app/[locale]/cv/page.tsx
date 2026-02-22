import { getMessages } from '@rozsival/i18n/server';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@rozsival/ui';
import { FileText, Briefcase, Wrench, GraduationCap } from 'lucide-react';
import type { Metadata } from 'next';

import type { LocalePageProps } from '@/types/locale';

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const { formatString } = getMessages(locale);

  return {
    title: formatString('cv.title'),
    description: formatString('cv.subtitle'),
  };
}

export default async function CVPage({ params }: LocalePageProps) {
  const { locale } = await params;
  const { t, formatString } = getMessages(locale);

  const experience = [
    {
      title: formatString('cv.jobs.apitree.title'),
      company: formatString('cv.jobs.apitree.company'),
      period: t('cv.jobs.apitree.period'),
      description: t('cv.jobs.apitree.description'),
    },
    {
      title: formatString('cv.jobs.wavevision.title'),
      company: formatString('cv.jobs.wavevision.company'),
      period: t('cv.jobs.wavevision.period'),
      description: t('cv.jobs.wavevision.description'),
    },
    {
      title: formatString('cv.jobs.sitefellows.title'),
      company: formatString('cv.jobs.sitefellows.company'),
      period: t('cv.jobs.sitefellows.period'),
      description: t('cv.jobs.sitefellows.description'),
    },
    {
      title: formatString('cv.jobs.lundegaard.title'),
      company: formatString('cv.jobs.lundegaard.company'),
      period: t('cv.jobs.lundegaard.period'),
      description: t('cv.jobs.lundegaard.description'),
    },
    {
      title: formatString('cv.jobs.freelance.title'),
      company: formatString('cv.jobs.freelance.company'),
      period: t('cv.jobs.freelance.period'),
      description: t('cv.jobs.freelance.description'),
    },
  ];

  const education = [
    {
      school: formatString('cv.schools.oa.school'),
      field: formatString('cv.schools.oa.field'),
      period: formatString('cv.schools.oa.period'),
      note: '',
    },
    {
      school: formatString('cv.schools.uhk.school'),
      field: formatString('cv.schools.uhk.field'),
      period: formatString('cv.schools.uhk.period'),
      note: formatString('cv.schools.uhk.note'),
    },
    {
      school: formatString('cv.schools.upce.school'),
      field: '',
      period: formatString('cv.schools.upce.period'),
      note: formatString('cv.schools.upce.note'),
    },
  ];

  const skills = {
    frontend: ['TypeScript', 'React', 'Next.js', 'Emotion', 'Tailwind CSS', 'Apollo Client', 'Redux'],
    backend: ['TypeScript', 'Node.js', 'NestJS', 'Python', 'Apollo Server', 'PostgreSQL', 'MongoDB'],
    cloud: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'ArgoCD'],
    tools: ['Figma', 'Claude Code', 'GitHub Copilot', 'Insomnia', 'Notion', 'Jira', 'Confluence'],
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="flex items-center text-4xl font-bold tracking-tight">
                <FileText className="mr-3 h-10 w-10 text-primary" />
                {t('cv.title')}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">{t('cv.subtitle')}</p>
            </div>
            <Button size="lg">{t('cv.downloadPdf')}</Button>
          </div>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="mb-6 flex items-center text-2xl font-semibold">
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              {t('cv.experience')}
            </h2>
            <div className="space-y-6">
              {experience.map((job) => (
                <Card key={`${job.title}-${job.company}`}>
                  <CardHeader>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="text-muted-foreground">{job.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p>{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <h2 className="mb-6 flex items-center text-2xl font-semibold">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              {t('cv.education')}
            </h2>
            <div className="space-y-6">
              {education.map((entry) => (
                <Card key={`${entry.school}-${entry.period}`}>
                  <CardHeader>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <CardTitle className="text-xl">{entry.school}</CardTitle>
                      <span className="text-sm text-muted-foreground">{entry.period}</span>
                    </div>
                    {entry.field ? <p className="text-muted-foreground">{entry.field}</p> : null}
                    {entry.note ? <p className="text-sm text-muted-foreground/70 italic">{entry.note}</p> : null}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="mb-6 flex items-center text-2xl font-semibold">
              <Wrench className="mr-2 h-6 w-6 text-primary" />
              {t('cv.skills')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t('cv.categories.frontend')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('cv.categories.backend')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('cv.categories.cloud')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('cv.categories.tools')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
