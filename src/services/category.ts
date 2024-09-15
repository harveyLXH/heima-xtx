import type { CategoryTopItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 *
 * 分类列表-小程序
 */
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
