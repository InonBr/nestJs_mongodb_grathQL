import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './types/lesson.type';

@Resolver((_of) => LessonType)
export class LessonResolver {
  @Query((_returns) => LessonType)
  lesson() {
    return {
      id: 'dsada',
      name: 'sdsa',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
