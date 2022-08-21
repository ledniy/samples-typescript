import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ActivitiesService {
  constructor(private readonly httpService: HttpService) {}

  async persist(value: number): Promise<unknown> {
    const res = await this.httpService.axiosRef.post(
      'http://httpbin.org/post',
      { value },
    );

    return res.data;
  }
}
