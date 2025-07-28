import { useState } from "react"
import { motion } from "framer-motion"
import { Trash2, Edit3, Clock, Calendar, AlertCircle, Tag } from "lucide-react"
import { format, isAfter, isBefore, isToday } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TodoItemProps {
  id: string
  content: string
  completed?: boolean
  priority?: "low" | "medium" | "high"
  category?: string
  dueDate?: string
  tags?: string[]
  createdAt?: string
  onToggle?: (id: string) => void
  onDelete?: (id: string) => void
  onEdit?: (id: string, content: string) => void
}

export function TodoItem({
  id,
  content,
  completed = false,
  priority = "medium",
  category = "general",
  dueDate,
  tags = [],
  createdAt,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(content)

  const handleEdit = () => {
    if (isEditing && editContent.trim() && editContent !== content) {
      onEdit?.(id, editContent.trim())
    }
    setIsEditing(!isEditing)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleEdit()
    }
    if (e.key === "Escape") {
      setEditContent(content)
      setIsEditing(false)
    }
  }

  const dueDateObj = dueDate ? new Date(dueDate) : null
  const isOverdue = dueDateObj && isBefore(dueDateObj, new Date()) && !completed
  const isDueToday = dueDateObj && isToday(dueDateObj)
  const isDueSoon = dueDateObj && isAfter(dueDateObj, new Date()) &&
    isBefore(dueDateObj, new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)) // 3 days

  const getPriorityIcon = () => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-3 w-3 text-red-500" />
      case "medium":
        return <AlertCircle className="h-3 w-3 text-yellow-500" />
      case "low":
        return <AlertCircle className="h-3 w-3 text-green-500" />
      default:
        return null
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={cn(
        "p-4 sm:p-5 lg:p-7 transition-all duration-300 hover:shadow-xl border-l-4 bg-white/80 backdrop-blur-sm",
        completed && "opacity-75 bg-slate-50/80",
        priority === "high" && "border-l-priority-high shadow-red-100/50",
        priority === "medium" && "border-l-priority-medium shadow-amber-100/50",
        priority === "low" && "border-l-priority-low shadow-emerald-100/50",
        isOverdue && "bg-red-50/80 border-red-300 shadow-red-200/50",
        isDueToday && "bg-amber-50/80 border-amber-300 shadow-amber-200/50",
        "hover:scale-[1.02] hover:border-l-8"
      )}>
        <div className="flex items-start gap-3 sm:gap-4">
          <Checkbox
            checked={completed}
            onCheckedChange={() => onToggle?.(id)}
            className="mt-0.5 sm:mt-1"
          />

          <div className="flex-1 min-w-0">
            {/* Priority and Category */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
              <div className="flex items-center gap-1">
                {getPriorityIcon()}
                <Badge
                  variant={priority as "high" | "medium" | "low"}
                  className={cn(
                    "text-xs font-semibold px-2 py-1 rounded-lg",
                    priority === "high" && "bg-red-100 text-red-800 border-red-200",
                    priority === "medium" && "bg-amber-100 text-amber-800 border-amber-200",
                    priority === "low" && "bg-emerald-100 text-emerald-800 border-emerald-200"
                  )}
                >
                  {priority.toUpperCase()}
                </Badge>
              </div>
              <Badge
                variant="outline"
                className="text-xs bg-slate-100 text-slate-700 border-slate-200 px-2 py-1 rounded-lg font-medium"
              >
                {category}
              </Badge>
            </div>

            {/* Content */}
            {isEditing ? (
              <input
                type="text"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                onBlur={handleEdit}
                onKeyDown={handleKeyPress}
                className="w-full bg-transparent border-none outline-none text-sm font-medium resize-none"
                autoFocus
              />
            ) : (
              <p className={cn(
                "text-sm sm:text-base font-medium leading-relaxed break-words mb-2",
                completed && "line-through text-muted-foreground"
              )}>
                {content}
              </p>
            )}

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    <Tag className="h-2 w-2 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Due Date */}
            {dueDateObj && (
              <div className={cn(
                "flex items-center gap-1 mb-2 text-xs",
                isOverdue && "text-red-600 font-medium",
                isDueToday && "text-yellow-600 font-medium",
                isDueSoon && "text-orange-600",
                !isOverdue && !isDueToday && !isDueSoon && "text-muted-foreground"
              )}>
                <Calendar className="h-3 w-3" />
                <span>
                  {isOverdue && "Overdue: "}
                  {isDueToday && "Due today: "}
                  {format(dueDateObj, "MMM d, yyyy")}
                </span>
              </div>
            )}

            {/* Created Date */}
            {createdAt && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>Created {format(new Date(createdAt), "MMM d, yyyy 'at' h:mm a")}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEdit}
              className="h-8 w-8 sm:h-9 sm:w-9 p-0 hover:bg-blue-100 hover:text-blue-600"
              aria-label="Edit todo"
            >
              <Edit3 className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete?.(id)}
              className="h-8 w-8 sm:h-9 sm:w-9 p-0 hover:bg-red-100 hover:text-red-600"
              aria-label="Delete todo"
            >
              <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
