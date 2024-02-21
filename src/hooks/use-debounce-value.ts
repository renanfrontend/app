import { Plus, Search, Filter, FileDown, MoreHorizontal, Loader2 } from 'lucide-react'
import { Header } from './components/header'
import { Tabs } from './components/tabs'
import { Button } from './components/ui/button'
	@@ -7,8 +7,7 @@ import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '.
import { Pagination } from './components/pagination'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { FormEvent, useState } from 'react'

export interface TagResponse {
  first: number
	@@ -34,21 +33,20 @@ export function App() {

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1

  const { data: tagsResponse, isLoading, isFetching } = useQuery<TagResponse>({
    queryKey: ['get-tags', urlFilter, page],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3333/tags?_page=${page}&_per_page=10&title=${urlFilter}`)
      const data = await response.json()

      return data
    },
    placeholderData: keepPreviousData,
  })

  function handleFilter(event: FormEvent) {
    event.preventDefault()

    setSearchParams(params => {
      params.set('page', '1')
      params.set('filter', filter)
	@@ -74,10 +72,11 @@ export function App() {
            <Plus className="size-3" />
            Create new
          </Button>
          {isFetching && <Loader2 className="size-4 animate-spin text-zinc-500" />}
        </div>

        <div className="flex items-center justify-between">
          <form onSubmit={handleFilter} className="flex items-center gap-2">
            <Input variant='filter'>
              <Search className="size-3" />
              <Control 
	@@ -86,11 +85,11 @@ export function App() {
                value={filter}
              />
            </Input>
            <Button type="submit">
              <Filter className="size-3" />
              Apply filters
            </Button>
          </form>

          <Button>
            <FileDown className="size-3" />