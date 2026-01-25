import { getMessages } from '@rozsival/i18n/server';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@rozsival/ui';
import { FileText, Briefcase, Wrench } from 'lucide-react';
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
      title: formatString('cv.jobs.senior.title'),
      company: formatString('cv.jobs.senior.company'),
      period: t('cv.jobs.senior.period'),
      description: t('cv.jobs.senior.description'),
    },
    {
      title: formatString('cv.jobs.fullstack.title'),
      company: formatString('cv.jobs.fullstack.company'),
      period: t('cv.jobs.fullstack.period'),
      description: t('cv.jobs.fullstack.description'),
    },
    {
      title: formatString('cv.jobs.web.title'),
      company: formatString('cv.jobs.web.company'),
      period: t('cv.jobs.web.period'),
      description: t('cv.jobs.web.description'),
    },
  ];

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'],
    backend: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
    cloud: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'Terraform'],
    tools: ['Git', 'GitHub Actions', 'Figma', 'Linear', 'Notion'],
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
